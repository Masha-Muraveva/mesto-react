import React from "react";
import api from "../utils/Api.js"
import Card from "./Card.js";


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const [userInfo, setUserInfo] = React.useState({userName:'', userDescription:'', userAvatar:''});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((data) => {
        setUserInfo({
            userName: data[0].name,
            userDescription: data[0].about,
            userAvatar: data[0].avatar
        });
        setCards(data[1]);
      })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <img src={`${userInfo.userAvatar}`} alt="Фото пользователя" className="profile__user-photo"/>
          <button className="profile__user-photo-button" onClick={onEditAvatar}></button>
          <div className="profile__changeable-information">
            <div className="profile__user-wrapper">
              <h1 className="profile__user-name">{userInfo.userName}</h1> 
              <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__user-description">{userInfo.userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Кнопка добавления фотографий" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return(
              <Card
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                card={card}
                onCardClick={onCardClick}
              >
              </Card>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main
