import express, { Request, Response } from "express";
import mongoose from "mongoose";
import CharacterModel from "../models/character";

const characterRoute = express.Router();

characterRoute.get("/", (req: Request, res: Response) => {
  CharacterModel.find((err, docs) => {
    if (!err) res.status(200).send(docs);
    else console.log(`Error cannot get data at "/": ${err}`);
  });
});

characterRoute.post("/", (req, res) => {
  const newRecord = new CharacterModel({
    id: req.body.id,
    name: req.body.name,
    gender: req.body.gender,
    race: req.body.race,
    role: req.body.role,
    level: req.body.level,
  });
  newRecord.save((err, docs) => {
    if (!err) res.status(200).send(docs);
    else console.log(`cannot save new characters, error : ${err}`);
  });
});

characterRoute.put("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`unknow id ${req.params.id}`);
  }
  const updatedRecord = {
    id: req.body.id,
    name: req.body.name,
    gender: req.body.gender,
    race: req.body.race,
    role: req.body.role,
    level: req.body.level,
  };

  CharacterModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log(`cannont update character, error: ${err}`);
    }
  );
});

characterRoute.delete("/:id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`unknow id ${req.params.id}`);
  }

  CharacterModel.findByIdAndDelete(req.params.id, null, (err, docs) => {
    if (!err) res.status(200).send(docs);
    else console.log(`cannont update character, error: ${err}`);
  });
});

export default characterRoute;
