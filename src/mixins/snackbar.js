export default {
  data() {
    return {
      options: {
        duration: 3000,
        speed: 500,
        ignoreDuplicates: false,
        closeOnClick: true,
      },
    };
  },
  methods: {
    showSuccessMessage(message) {
      this.$notify({
        type: 'success',
        text: message,
        title: 'Success',
        ...this.options,
      });
    },
    showErrorMessage(message) {
      this.$notify({
        type: 'error',
        text: message,
        title: 'Error',
        ...this.options,
      });
    },
    showInfoMessage(message) {
      this.$notify({
        text: message,
        title: 'Info',
        ...this.options,
      });
    },
    showWarningMessage(message) {
      this.$notify({
        type: 'warn',
        text: message,
        title: 'Warning',
        ...this.options,
      });
    },
  },
};
