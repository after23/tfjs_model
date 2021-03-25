const button = document.getElementById("button");
const ans = document.getElementById("answer");

async function loadModel() {
    model = undefined;
    model = await tf.loadLayersModel("https://raw.githubusercontent.com/after23/tfjs_model/main/model.json");
    console.log("model loaded")
  }
  loadModel();

  function make_prediction() {
    var a, b, c, d, e, f, g, output;
    a = (Number(document.getElementById("first").value)+90)/90;
    b = (Number(document.getElementById("second").value)+90)/90;
    c = (Number(document.getElementById("third").value)+90)/90;
    d = (Number(document.getElementById("fourth").value)+90)/90;
    e = (Number(document.getElementById("fifth").value)+90)/90;
    f = (Number(document.getElementById("sixth").value)+90)/90;
    g = (Number(document.getElementById("seventh").value)+90)/90;
    var input = [a,b,c,d,e,f,g];
    for (var x = 7; x < 70; x++){
        input.push(Math.floor( Math.random() * 90 )/90)
    }
    // var test = []
    // test.push(input)
    // for (var x = 0; x < 9; x++){
    //   var temp = [];
    //   for (var y = 0; y <= 6; y++){
    //     temp.push(Math.floor( Math.random() * 90 )/90)
    //   };
    //   test.push(temp)
    // };
    // console.log(test)

    console.log(input)
    input_xs = tf.tensor3d(input, [1,10,7]);
    output = model.predict(input_xs);
    console.log(output)
    const outputData = output.dataSync();
    console.log(outputData)
    document.getElementById("answerx").value = "x = " + outputData[0]  ;
    document.getElementById("answery").value = "y = " + outputData[1]  ;
  }

button.addEventListener('click', function(){
    make_prediction()
});