import React from 'react'

const BayarMandiri = () => {
    const [openTab, setOpenTab] = React.useState(2);
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
                  Berikut adalah langkah pembayaran virtual account produk dan layanan Niagahoster lewat ATM Bank Mandiri.
                    1. Pilih menu Bayar/Beli
                    2. Pilih menu Lainnya
                    3. Pilih menu Multipayment
                    4. Masukkan Nomor Kode bayar Perusahaan / Instansi
                    5. Masukkan Kode Merchant (264)
                    6. Masukkan 8 digit Nomor Kode Pembayaran
                    7. Periksa kembali rincian transaksi Anda
                    8. Transaksi selesai
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                    <p className="text-1xl">
                    Berikut pembayaran lewat e-Banking.
                    1. Pilih Bayar, kemudian pilih Multipayment
                    2. Pilih Doku pada menu Penyedia Jasa
                    3. Masukkan Kode Merchant (264)
                    4. Masukkan 8 digit Nomor Kode Pembayaran di bagian ID/Pay Code
                    5. Periksa kembali rincian transaksi Anda
                    6. Transaksi selesai</p>
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

export default BayarMandiri