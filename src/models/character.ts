import { Schema, model, connect } from "mongoose";

interface Character {
  id: number;
  name: string;
  gender: string;
  race: string;
  role: string;
  level: number;
  statistics: Array<any>;
  equipments: Array<any>;
}

const schema = new Schema<Character>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  statistics: {
    type: Array,
  },
  equipments: {
    type: Array,
  },
});

const CharacterModel = model<Character>("carogame", schema, "characters");

export default CharacterModel;
