(function() {
  var activate, activate_coffee2js, activate_js2coffee, coffeejs_is_active, randomFrom, samples;
  samples = window.samples 
  randomFrom = function(arr) {
    return arr[parseInt(Math.random() * arr.length)];
  };
  activate = function(id, options) {
    var CoffeeMode, JavaScriptMode, editor, s;
    editor = ace.edit(id);
    s = editor.getSession();
    editor.setTheme("ace/theme/clouds");
    if (options.type === "javascript") {
      JavaScriptMode = require("ace/mode/javascript").Mode;
      editor.getSession().setMode(new JavaScriptMode());
    } else if (options.type === "coffeescript") {
      CoffeeMode = require("ace/mode/coffee").Mode;
      editor.getSession().setMode(new CoffeeMode());
    }
    editor.getSession().setTabSize(options['tabSize'] || 4);
    editor.getSession().setUseSoftTabs(true);
    editor.renderer.setShowPrintMargin(false);
    editor.renderer.setHScrollBarAlwaysVisible(false);
    editor.renderer.setShowGutter(false);
    if (options.readonly) {
      editor.setReadOnly(true);
    }
    if (options.noActiveLine) {
      editor.setHighlightActiveLine(false);
    }
    return editor;
  };
  activate_js2coffee = function() {
    var editor, onchange, output;
    editor = activate("js2coffee_editor", {
      type: "javascript"
    });
    output = activate("js2coffee_output", {
      type: "coffeescript",
      tabSize: 2,
      noActiveLine: true
    });
    onchange = function() {
      var input, out;
      input = editor.getSession().getValue();
      try {
        out = Js2coffee.build(input);
        $("#js2coffee .error").hide();
        return output.getSession().setValue(out);
      } catch (e) {
        $("#js2coffee .error").html("" + e);
        return $("#js2coffee .error").show();
      }
    };
    editor.getSession().on("change", onchange);
    editor.getSession().setValue(randomFrom(samples.js));
    return onchange();
  };
  coffeejs_is_active = false;
  activate_coffee2js = function() {
    var editor, onchange, output;
    if (coffeejs_is_active) {
      return;
    }
    coffeejs_is_active = true;
    editor = activate("coffee2js_editor", {
      type: "coffeescript",
      tabSize: 2
    });
    output = activate("coffee2js_output", {
      type: "javascript",
      noActiveLine: true
    });
    onchange = function() {
      var input, out;
      window.input= editor.getSession();
      input = editor.getSession().getValue();
      try {
        out = CoffeeScript.compile(input, {
          bare: "on"
        });
        $("#coffee2js .error").hide();
        window.output = out;
        return output.getSession().setValue(out);
      } catch (e) {
        $("#coffee2js .error").html("" + e);
        return $("#coffee2js .error").show();
      }
    };
    editor.getSession().on("change", onchange);
    editor.getSession().setValue(randomFrom(samples.coffee));
    return onchange();
  };
  $(window).resize(function() {
    var h;
    h = $(window).height() - 95;
    if (h < 500) {
      h = 500;
    }
    $("#editors").css({
      height: h
    });
    return $("#editors form").css({
      height: h
    });
  });
  $("p.more-info a").live('click', function() {
    $("body").animate({
      scrollTop: $("#info").offset().top - 10,
      1000: 1000
    });
    return false;
  });
  $(window).trigger('resize');
  $(function() {
    activate_coffee2js();
    $("#coffee2js .editor textarea").focus();
    return $(window).trigger('resize');
  });
  $('#run').bind('click', function(){
    eval(window.output);
  });
}).call(this);
