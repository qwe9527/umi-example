import { defineConfig } from 'umi';

export default defineConfig({
  title: '慧能源管理平台',

  nodeModulesTransform: {
    type: 'none',
  },

  dva: {
    hmr: true,
    immer: true,
  },

  dynamicImport: {
    loading: '@/components/PageLoading',
  },

  proxy: {
    '/api': {
      target: 'http://emeter.geeon.com.cn/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
});
