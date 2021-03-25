# tfjs_model

## Load model
Load model dengan menggunakan file model.json 

```javascript
async function loadModel() {
    model = undefined;
    model = await tf.loadLayersModel("https://raw.githubusercontent.com/after23/tfjs_model/main/model.json");
    console.log("model loaded")
  }
  loadModel();
```

## Input data
Input model merupakan tensor 3d 1,10,7. untuk membuat input tensor menggunakan fungsi :

```javascript
input_3d = tf.tensor3d(input, [1,10,7]);
```
dimana input merupakan array berisi 70 bacaan rssi.

## Prediksi
Prediksi dibuat dengan menggunakan kelas .predict pada model

```javascript
output = model.predict(input_3d);
```

yang mengembalikan data berupa tf.tensor. untuk memperoleh hasil prediksi digunakan kelas .dataSync pada tensor

```javascript
const outputData = output.dataSync();
```

hasil prediksi merupakan posisi x dan y yang disimpan dalam array 1d dimana index 0 merupakan posisi x dan index 1 merupakan posisi y
