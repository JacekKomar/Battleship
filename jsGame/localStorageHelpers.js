export const USER_RANKING_LIST = "user_ranking_list";

export const addUserListToLocalStorage = (user) => {
  const localStorageItemAsString =
    localStorage.getItem(USER_RANKING_LIST) || "[]";
  const userList = JSON.parse(localStorageItemAsString);

  const newUserList = [...userList, user];

  localStorage.setItem(USER_RANKING_LIST, JSON.stringify(newUserList));
};
