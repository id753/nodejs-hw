import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    avatar: {
      type: String,
      required: false,
      default: '<https://ac.goit.global/fullstack/react/default-avatar.jpg>',
    },
  },
  {
    timestamps: true,
    versionKey: false, // Убирает поле _v
  },
);

// Створіть хук pre('save'), щоб за замовчуванням встановлювати username таким самим, як email, при створенні користувача.
userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

// Перевизначаємо метод toJSON
userSchema.methods.toJSON = function () {
  const object = this.toObject(); //Сделали копию данных без методов Mongoose
  delete object.password;
  return object;
};

export const User = model('User', userSchema);
