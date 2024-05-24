// var code;
    
// $(function() {

    // var code = editor.create(document.getElementById("container"), {
    //     value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
    //     language: "javascript",
    
    //     lineNumbers: "off",
    //     roundedSelection: false,
    //     scrollBeyondLastLine: false,
    //     readOnly: false,
    //     theme: "vs-dark",
    // });


    // code = ace.edit("code");  
    // console.log(code)                    // создаем редактор из элемента с id="code"
    // code.setTheme("ace/theme/twilight");           // выбираем тему оформления для подсветки синтаксиса
    // code.getSession().setMode("ace/mode/c_cpp");  // говорим что код надо подсвечивать как C++ код
    // code.setShowPrintMargin(false);               // опционально: убираем вертикальную границу в 80 сиволов
    // code.setOptions({
    //     // maxLines: Infinity,                    // опционально: масштабировать редактор вертикально по размеру кода
    //     fontSize: "12pt", 
    //     readOnly: false,
    //                       // опционально: размер шрифта ставим побольше
    // });

    // code.$blockScrolling = Infinity;              // отключаем устаревшие, не поддерживаемые фишки редактора

    // code = ace.edit("code2");  
    // console.log(code)                    // создаем редактор из элемента с id="code"
    // code.setTheme("ace/theme/twilight");           // выбираем тему оформления для подсветки синтаксиса
    // code.getSession().setMode("ace/mode/c_cpp");  // говорим что код надо подсвечивать как C++ код
    // code.setShowPrintMargin(false);               // опционально: убираем вертикальную границу в 80 сиволов
    // code.setOptions({
    //     // maxLines: Infinity,                    // опционально: масштабировать редактор вертикально по размеру кода
    //     fontSize: "12pt", 
    //     readOnly: false,
    //                       // опционально: размер шрифта ставим побольше
    // });

    // code.$blockScrolling = Infinity;              // отключаем устаревшие, не поддерживаемые фишки редактора

// });



function run(e) {
    // Команда для компиляции на удаленном сервере
    var cmd = "g++ -Wall main.cpp -o main_prog && echo 'Compilation: SUCCESS."
        + " Program output is:\n' && ./main_prog && echo \"\nExit code: $?\"";

    var output = $("#output");
    output.text('');
    var to_compile = {
        "src": code.getValue(),
        "cmd": cmd,
    };

    output.text("Executing... Please wait.");

    $.ajax({
        url: "http://coliru.stacked-crooked.com/compile",
        type: "POST",
        data: JSON.stringify(to_compile),
        contentType:"text/plain; charset=utf-8",
        dataType: "text"
    }).done(function(data) {
        output.text(data);
    }).fail(function(data) {
        output.text("Server error: " + data);
    });
};

let btn = $('#run')
btn.click(run)






