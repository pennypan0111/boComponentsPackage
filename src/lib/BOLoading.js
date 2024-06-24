import { ElLoading } from 'element-plus'

export function CustomElLoading() {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  return {
    close: () => loading.close()
  }
}

const BOLoading = {
  install: (app) => {
    app.config.globalProperties.$BOLoading = CustomElLoading
  }
}

export default BOLoading
