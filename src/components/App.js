import React from 'react';
import '../index.css';
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import PopupWithForm from "./PopupWithForm.js"
import ImagePopup from "./ImagePopup.js"

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: '', name: ''});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({link: '', name: ''});
  }

  return (
      <body className="body">
        <div className="page">
          <Header/>
          <Main 
            onEditProfile={ handleEditProfileClick }
            onEditAvatar={ handleEditAvatarClick }
            onAddPlace={ handleAddPlaceClick }
            onCardClick={ handleCardClick }
          />
          <Footer/>
          <PopupWithForm
            popupName="edit-profile"
            titleName="edit-profile"
            title="Редактировать профиль"
            formName="profileForm"
            button="edit-profile"
            buttonText="Сохранить"
            isOpen={ isEditProfilePopupOpen }
            onClose={ closeAllPopups }
          >
            <input
              type="text"
              id="name-input"
              name="name"
              placeholder="Имя/Никнейм"
              className="popup__form-data popup__form-data_type_name"
              minLength="2"
              maxLength="40"
              autocomplete="off"
              required
              />
            <span className="name-input-error popup__form-data-error"></span>
            <input
              type="text"
              id="about-input"
              name="about"
              placeholder="Описание"
              className="popup__form-data popup__form-data_type_description"
              minLength="2"
              maxLength="200"
              autocomplete="off"
              required
              />
            <span className="about-input-error popup__form-data-error"></span>
          </PopupWithForm>

          <PopupWithForm
            popupName="add-card"
            titleName="add-card"
            title="Новое место"
            formName="addCardForm"
            button="add-card"
            buttonText="Создать"
            isOpen={ isAddPlacePopupOpen }
            onClose={ closeAllPopups }
          >
            <input
              type="text"
              id="title-input"
              name="title"
              placeholder="Название"
              className="popup__form-data popup__form-data_type_card-title"
              minLength="2"
              maxLength="30"
              autocomplete="off"
              required
              />
            <span className="title-input-error popup__form-data-error"></span>
            <input
              type="url"
              id="link-input"
              name="link"
              placeholder="Ссылка на картинку"
              className="popup__form-data popup__form-data_type_card-link"
              autocomplete="off"
              required 
              />
            <span className="link-input-error popup__form-data-error"></span>
          </PopupWithForm>

          <PopupWithForm
            popupName="edit-avatar"
            titleName="edit-avatar"
            title="Обновить аватар"
            formName="avatarForm"
            button="edit-avatar"
            buttonText="Сохранить"
            isOpen={ isEditAvatarPopupOpen }
            onClose={ closeAllPopups }
          >
            <input 
              type="url" 
              id="avatar-input" 
              name="avatarLink" 
              placeholder="Ссылка на аватар" 
              className="popup__form-data popup__form-data_type_avatar-link" 
              autocomplete="off"
              required/>
              <span className="avatar-input-error popup__form-data-error"></span>
          </PopupWithForm>

          <PopupWithForm
            popupName="delete-card"
            titleName="delete-card"
            title="Вы уверены?"
            formName="deleteCardForm"
            button="delete-card"
            buttonText="Да"
          >
          </PopupWithForm>

          <ImagePopup
            card={ selectedCard }
            onClose={ closeAllPopups }
          >
          </ImagePopup>
        </div>
      </body> 
  );
}

export default App