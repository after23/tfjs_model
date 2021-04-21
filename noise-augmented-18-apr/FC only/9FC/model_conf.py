tf.keras.backend.clear_session()

model = tf.keras.models.Sequential([
  tf.keras.layers.Dense(90, activation="relu"),
  tf.keras.layers.Dense(80, activation="relu"),
  tf.keras.layers.Dense(70, activation="relu"),
  tf.keras.layers.Dropout(.2),
  tf.keras.layers.Dense(60, activation="relu"),
  tf.keras.layers.Dense(50, activation="relu"),
  tf.keras.layers.Dropout(.2),
  tf.keras.layers.Dense(40, activation="relu"),
  tf.keras.layers.Dense(30, activation="relu"),
  tf.keras.layers.Dropout(.2),
  tf.keras.layers.Dense(20, activation="relu"),
  tf.keras.layers.Dense(10, activation="relu"),
  tf.keras.layers.Dense(2),

])


optimizer = tf.keras.optimizers.SGD(lr=1e-3, momentum=0.9)
model.compile(loss=tf.keras.losses.Huber(),
              optimizer=optimizer,
              metrics=["mse"])
history = model.fit(np.array(x_train), np.array(y_train), validation_split=0.1, epochs=150)