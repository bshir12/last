import React from 'react'

const BayarBri = () => {
    const [openTab, setOpenTab] = React.useState(4);
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
                  Langkah pembayaran virtual account bagi pelanggan Niagahoster lewat ATM BRI.
                  1. Pilih menu Transaksi Lain, kemudian pilih menu Pembayaran
                  2. Pilih menu Lainnya, kemudian pilih Briva
                  3. Masukkan nomor rekening dengan nomor Virtual Account Anda, kemudian pilih Benar
                  4. Ketika muncul konfirmasi pembayaran, pilih Ya atau Lanjut
                  5. Transaksi selesai dan ambil bukti transaksi
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                    <p className="text-1xl">
                    Selain itu, pelanggan Niagahoster juga dapat melakukan pembayaran lewat BRI Mobile.
                    1. Masuk ke aplikasi BRI Mobile, lalu pilih menu Pembayaran
                    2. Pilih menu Briva
                    3. Masukkan nomor rekening dengan nomor Virtual Account Anda, kemudian masukkan nominal pembayaran
                    4. Masukkan PIN Mobile Banking dan klik Kirim
                    5. Transaksi selesai! Bukti pembayaran akan dikirimkan melalui SMS
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

export default BayarBri