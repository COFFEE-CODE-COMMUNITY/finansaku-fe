import { useEffect } from "react";
import Swal from "sweetalert2";

function PopUP({ title, pesan, cancel, confirm }) {
    useEffect(() => {
        Swal.fire({
            title: title,
            text: pesan,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Kirim",
            cancelButtonText: "Batal",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                confirm?.();
            } else {
                cancel?.();
            }
        });
    }, []);

  return null;
}

export default PopUP