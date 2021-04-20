 tf.keras.backend.clear_session()

model = tf.keras.models.Sequential([
  tf.keras.layers.Dense(20, activation="relu"),
  tf.keras.layers.Dropout(.2),
  tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(20, return_sequences=True)),
  tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(10)),
  tf.keras.layers.Dense(2),

])


optimizer = tf.keras.optimizers.SGD(lr=1e-1, momentum=0.9)
model.compile(loss=tf.keras.losses.Huber(),
              optimizer=optimizer,
              metrics=["mse"])
history = model.fit(np.array(x_train), np.array(y_train), batch_size=100, validation_split=0.1 , epochs=150)