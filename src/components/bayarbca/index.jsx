import React from 'react'

const BayarBca = () => {
    const [openTab, setOpenTab] = React.useState(3);
  return (
    <div>
        <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto ">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-black"
                    : "text-black bg-slate-400")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <p>Cara melakukan Pembayaran melalui ATM</p>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-black"
                    : "text-black bg-slate-400")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <p>Cara melakukan Pembayaran melalui Mobile Banking</p>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto text-center">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="text-1xl">
                  Berikut langkah pembayaran layanan Niagahoster virtual account Bank BCA lewat ATM.
                  1. Masukkan Kartu ATM BCA & PIN
                  2. Pilih menu Transaksi Lainnya > Transfer > ke Rekening BCA Virtual Account
                  3. Masukkan kode pembayaran atau nomor BCA Virtual Account Anda
                  4. Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan
                  5. Ikuti instruksi untuk menyelesaikan transaksi
                  6. Transaksi selesai
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                    <p className="text-1xl">
                    Selanjutnya adalah langkah pembayaran melalui virtual account m-Banking.
                    1. Lakukan log in pada aplikasi BCA Mobile
                    2. Pilih menu m-BCA, kemudian masukkan kode akses m-BCA
                    3. Pilih m-Transfer > BCA Virtual Account
                    4. Masukkan kode pembayaran atau nomor BCA Virtual Account Anda
                    5. Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan
                    6. Masukkan pin m-BCA
                    7. Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BayarBca