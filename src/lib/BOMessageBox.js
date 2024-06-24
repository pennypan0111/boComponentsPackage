import { ElMessageBox } from 'element-plus'

export async function CustomElMessageBox(title, message, status, buttonText) {
  await ElMessageBox.alert(
    message,
    title,
    {
      confirmButtonText: buttonText,
      type: status,
      center: true,
      showClose: false
    }
  )
}

const BOMessageBox = {
  install: (app) => {
    app.config.globalProperties.$BOMessageBox = CustomElMessageBox
  }
}

export default BOMessageBox
