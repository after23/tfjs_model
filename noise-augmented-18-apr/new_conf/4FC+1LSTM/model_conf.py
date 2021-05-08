 tf.keras.backend.clear_session()

model = tf.keras.models.Sequential([
  tf.keras.layers.Dense(128, activation="relu"),
  tf.keras.layers.Dense(64, activation="relu"),
  tf.keras.layers.Dropout(.3),
  tf.keras.layers.Dense(64, activation="relu"),
  tf.keras.layers.Dense(32, activation="relu"),
  tf.keras.layers.Dropout(.3),
  tf.keras.layers.Dropout(.3),
  tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(64)),
  tf.keras.layers.Dense(2),

])


optimizer = tf.keras.optimizers.Adagrad(lr=1e-1)
model.compile(loss=tf.keras.losses.Huber(),
              optimizer=optimizer,
              metrics=["mse"])
history = model.fit(np.array(x_train), np.array(y_train), batch_size=128, validation_split=0.1 , epochs=150)