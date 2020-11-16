import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [file, setFile] = useState("");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("picture", file);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("brand", brand);
  formData.append("condition", condition);
  formData.append("color", color);
  formData.append("city", city);
  formData.append("size", size);

  const tokens = token;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tokens);
    const response = await axios.post(
      "https://vinted-backend-api.herokuapp.com/offer/publish",
      formData,
      { headers: { authorization: `Bearer ${tokens}` } }
    );
    console.log(tokens);
    const newOffer = response.data;
    if (newOffer) {
      history.push("/");
    } else {
      alert("Les informations ne sont pas correcte, veuillez ré-essayer");
    }
  };

  return (
    <>
      <div className="publish">
        <div className="publish-container">
          <h2>Vends ton article</h2>
          <form onSubmit={handleSubmit}>
            <div className="photos">
              <p>Ajoute tes photos</p>
              <div className="cadre-photos">
                <div className="cadre-text">
                  <label for="file" class="label-file">
                    <span>Ajoute une photo</span>
                  </label>
                  <input
                    id="file"
                    type="file"
                    className="input-file"
                    // multiple={true}
                    // value={file.name}
                    onChange={(e) => {
                      setFile(e.target.files[0]); //.map pour plusieurs photos
                      console.log(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-container">
              <div className="text">
                <h3>Titre</h3>
                <input
                  type="text"
                  placeholder="ex: Chemise blanche"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="text">
                <h3>Décris ton article</h3>
                <textarea
                  name="description"
                  placeholder="ex: très peu porté, taille petit"
                  rows="5"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="text-container">
              <div className="text">
                <h3>Marque</h3>
                <input
                  type="text"
                  placeholder="ex: H&M"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </div>
              <div className="text">
                <h3>Taille</h3>
                <input
                  type="text"
                  placeholder="ex: M / 38 / 11"
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                />
              </div>
              <div className="text">
                <h3>Couleur</h3>
                <input
                  type="text"
                  placeholder="ex: Rouge"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
              </div>
              <div className="text">
                <h3>Etat</h3>
                <input
                  type="text"
                  placeholder="ex: Neuf"
                  value={condition}
                  onChange={(e) => {
                    setCondition(e.target.value);
                  }}
                />
              </div>
              <div className="text">
                <h3>Lieu</h3>
                <input
                  type="text"
                  placeholder="ex: Annecy"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="text-container">
              <div className="text">
                <h3>Prix</h3>
                <div className="price-container">
                  <input
                    type="text"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Je suis intéressé(e) par les échanges</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-button">
              <button type="submit">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Publish;
