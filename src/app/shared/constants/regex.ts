export const REGEX = {
  name: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  avatar: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff)$/,
  price: /^\d+(?:\.\d{2})?$/
}