class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector, userId }) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
    this._avatarSelector = avatarSelector;
    this._userId = userId
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent,
      avatar: this._avatarSelector.src,
      userId: this._userId
    }
  }

  setUserInfo({ name, about, avatar, userId }) {
    this._nameSelector.textContent = name;
    this._aboutSelector.textContent = about;
    this._avatarSelector.src = avatar;
    this._userId = userId;
  }
}

export default UserInfo;
