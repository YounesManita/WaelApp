console.clear();

const User = require("../models/UserModels");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
    );

    console.log("database connect");

    const email = "waelhsairi6@gmail.com".toLocaleLowerCase().trim();

    let webmaster = await User.findOne({
      role: "admin",
    });

    if (!webmaster) {
      let password = "adminpassword";
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      let new_user = new User({
        nom: "Wael",
        prenom: "Hssairi",
        email: "waelhsairi6@gmail.com",
        Numerotelephone: "421696141",
        password: hashed,
        role: "admin",
      });
      await new_user.save();
      console.log(`webmaster account has been added : ${new_user.email}`);
    } else {
      console.log(
        ` webmaster account already exist \n webmaster email : ${webmaster.email}`
      );
    }
  } catch (error) {
    console.log(error);
    console.log("database is not connect");
  }
};

module.exports = connectDB;