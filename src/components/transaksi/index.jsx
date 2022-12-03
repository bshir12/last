import React from 'react'

const Transaksi = () => {
  return (
    <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Produk</th>
                <th>Tanggal</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>Asuransi Kesehatan Mandiri</th>
                <th>29 November 2022</th>
                <th>Terbeli</th>
              </tr>
              <tr className="active">
                <th>2</th>
                <th>Deposito BCA</th>
                <th>25 November 2022</th>
                <th>Terbeli</th>
              </tr>
              <tr>
                <th>3</th>
                <th>Deposito BRI</th>
                <th>24 November 2022</th>
                <th>Redeem Code</th>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Transaksi