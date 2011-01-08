module Jekyll
  class Postfiles < Generator
    safe true
    priority :lowest

    def generate(site)
      if site.config['permalink'] != 'pretty'
        puts "Sorry, postfiles only work with pretty permalinks."
        puts "Change the setting in _config.yml to use postfiles."
        return
      end

      site.posts.each do |post|
        # Go back to the single-file post name
        postfile_id = post.id.gsub(/(\d{4})\/(\d\d)\/(\d\d)\/(.*)/, '\1-\2-\3-\4')
        # Get the directory that files from this post would be in
        postfile_dir = File.join('./_postfiles', postfile_id)
        # Next post if there aren't any postfiles for this post
        next unless File.exist?(postfile_dir)
        # Construct the directory the post will be in
        post_dir = File.join(site.config['destination'], post.url)
        # Copy postfiles to the directory created for this post
        Dir[File.join(postfile_dir, '/*')].each{|pf| FileUtils.cp(pf, post_dir) }
      end
    end

  end

  class PostfileTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      File.join(context['page']['url'], @text)
    end
  end
end

Liquid::Template.register_tag('postfile', Jekyll::PostfileTag)