import { model, Schema } from 'mongoose';

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // Исправлено: добавлена 'd'
      trim: true,
    },
    content: {
      type: String,
      trim: true,
      default: '',
    },
    tag: {
      type: String,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: 'Todo',
    },
  },
  {
    timestamps: true, // Добавляет createdAt и updatedAt автоматически
    versionKey: false, // Убирает поле __v
  },
);

// Исправлено: имя модели теперь совпадает по смыслу с заметками
export const Note = model('note', notesSchema);
