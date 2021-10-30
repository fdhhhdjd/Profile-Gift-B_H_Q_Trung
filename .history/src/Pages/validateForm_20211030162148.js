export default function validateForm({ name, email, password, confirmPass }) {
  if (!name.trim()) {
    return "Tên bạn không được để trống!";
  } else if (!/^[A-Za-z]+/.test(name.trim())) {
    errors.name = "Enter a valid name";
  }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return "Email Không được để trống!";
  } else if (regex.test(email.toLocalLowerCase)) {
    return "Email sai định dạng";
  }
  if (!password) {
    return "Mật khẩu không được để trống!";
  } else if (password.length < 6) {
    return "Mật khẩu không được nhỏ hơn 6 kí tự";
  }

  if (!confirmPass) {
    return "Mời bạn nhập lại mật khẩu!";
  } else if (confirmPass !== password) {
    return "Nhập lại mật khâu sai!";
  }
  return null;
}
