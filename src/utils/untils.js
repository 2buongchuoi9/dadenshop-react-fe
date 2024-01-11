const key = 987987;

export const messageAntd = {
  loading: (content) => ({ key: key, type: 'loading', content }),
  info: (content) => ({ key: key, type: 'info', content }),
  success: (content) => ({ key: key, type: 'success', content }),
  error: (content) => ({ key: key, type: 'error', content }),
};
