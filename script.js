const button = document.getElementById("button");
const ans = document.getElementById("answer");

async function loadModel() {
    model = undefined;
    model = await tf.loadLayersModel("https://raw.githubusercontent.com/after23/tfjs_model/main/noise-augmented-18-apr/new_conf/4FC%2B1LSTM/model.json");
    console.log("model loaded")
  }
  loadModel();

  function make_prediction() {
    var a, b, c, d, e, f, g, output;
    a = (Number(document.getElementById("first").value)+100)/100;
    b = (Number(document.getElementById("second").value)+100)/100;
    c = (Number(document.getElementById("third").value)+100)/100;
    d = (Number(document.getElementById("fourth").value)+100)/100;
    e = (Number(document.getElementById("fifth").value)+100)/100;
    f = (Number(document.getElementById("sixth").value)+100)/100;

    var input = [a,b,c,d,e,f];
    for (var x = 6; x < 60; x++){
        input.push(Math.floor( Math.random() * 100 )/100)
    }

    console.log(input)
    input_xs = tf.tensor3d(input, [1,10,6]);
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