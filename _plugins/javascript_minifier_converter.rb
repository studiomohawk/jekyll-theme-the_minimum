module Jekyll
  # Compresses your JavaScript using the YUI compressor. You must specify an 
  # empty YAML front matter at the beginning of the file.
  # .js -> .min.js
  class JavaScriptMinifierConverter < Converter
    def setup
      return if @setup
      require 'yui/compressor'
      @setup = true
    rescue LoadError
      STDERR.puts 'You are missing a library required for yui-compressor. Please run:'
      STDERR.puts '  $ [sudo] gem install yui-compressor'
      raise FatalException.new('Missing dependency: yui-compressor')
    end

    def matches(ext)
      ext =~ /js/i
    end

    def output_ext(ext)
      '.min.js'
    end

    def convert(content)
      setup
      YUI::JavaScriptCompressor.new(:munge => true).compress(content)
    end
  end
end
