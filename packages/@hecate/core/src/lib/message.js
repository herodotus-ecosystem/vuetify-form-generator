import Swal from 'sweetalert2';

const swal = Swal;

const notify = {
    information(title, type) {
        return swal.fire({
            position: 'top',
            title: title,
            icon: type,
            timer: 2000,
            showConfirmButton: false,
        });
    },
    info(text) {
        this.information(text, 'info');
    },

    error(text) {
        this.information(text, 'error');
    },

    warning(text) {
        this.information(text, 'warning');
    },

    success(text) {
        this.information(text, 'success');
    },

    question(text) {
        this.information(text, 'question');
    },
};

export { notify, swal };
