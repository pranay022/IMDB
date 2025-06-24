import React from "react";

function WatchList({watchlist}) {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="bg-blue-400 flex justify-center h-[2rem] w-[4rem] rounded-md text-white items-center mx-2">Action</div>
        <div className="bg-gray-400 flex justify-center h-[2rem] w-[4rem] rounded-md text-white items-center mx-2">Action</div>
        <div className="bg-gray-400 flex justify-center h-[2rem] w-[4rem] rounded-md text-white items-center mx-2">Action</div>
        <div className="bg-gray-400 flex justify-center h-[2rem] w-[4rem] rounded-md text-white items-center mx-2">Action</div>
       </div>


      <div className="flex justify-center my-4">
        <input
          type="text"
          className="h-[2rem] w-[18rem] bg-gray-600/30 rounded-md outline-none p-2"
          placeholder="Search Movies"
        />
      </div>

      <div className="rounded-md overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex item-center px-2">
                <img
                  className="h-[5rem] p-2"
                  src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALAAvQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABBEAABBAECAwYDBAgDCAMAAAABAAIDEQQFIRIxQQYTIlFhgQcycRRCkcEVI3KhsdHh8DNSkmJjgoOisrPxFyVD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APGqSpSSQMl58t76JylSBBrdiQLHpzT1uK5BIJwEDgFSGyYKSBCuQG12fVOGgf8ArmkE9FAhXknpIBPyQJS50K2TKQQLgbXQn+wpAA8wP6JBo9vNWNagTWq5kY5gC6r28kzGq9g9EFkTCXjYG+tLf0fBJPG5pB6bckJp+K6VwPDy810cbHxNpqAqOo64gAOoCfIliZHZ8P0VYn4QS4A15rIz8oy+EIKcuZ0j6BsJYf3/AG/NDAkDzKKwq8e9cufug86TprToEkEgnQJOEkqQTClSiApBA4CufCWQRzEgtkLmiuYLasH8R+KqC0dMhGfDJjP2bFI2d56tj+WQ/hwfggHzMR+GITKQe9hbKOG/CDexvqK3U/sTzqH2LjjEgfwucTTWVu4k+QF39CjcFw1RzpZ2Cock5UjS66idu8fQcLQP2lTigyY2blT5EccmQ7umueTTi43IRQO9UP8AmIBo8Z7p5ICA2WMSFzSeXA1xcP8ApI+qjFC6RspBA7pnG6z0sD81qvjvLiyWytn73Ena9zOXeMhcHcwN64XH1cqtGfFFJkOlZbfs5+7deNlOr71GjXWqQCPx3RNjdJTXPFiM8+HoT5X06nnyIJTArsmGVs/653ePk8YkuxIDfiB8j7Haqu0mNQOxqPwsZ0hoNVePC6Q01v4rpNOwjG263QXYUHdMo8/RaDDtbgosaW86VeZN3bNiEA2o5TWNIFbrDLnF1lW5Exlfbhsqm78kFkRd1WrgRScDnCiDSDwoDNILqiuvwsRkUXCQg8MATpJIEkkpIGUgopxaAvTsLJ1LOgwcGF0uTkPDIoxQ4j9TsOvNH9oezer9mp4IdbwzjPnaXR/rGvDgCAd2kjqPxXY/ArS2Ta9m65lkDG0rHNPd917wd/Zgd/qW720y2dv/AIWx9ooYeHK07Ke58Y5sZxU4H/gLHeyDyfSdOy9X1GHT9Oh7/LnJEcYcBxUC7mSByB6qzPws/RNRytPzWHGzIx3c8fED4XAEiwSNwR1W78KLd8Q9E8jLLW3TupFP4p7fEPXB072Pp/uY0HLwvkjL2QlwdMO7LWg29prw113r9y7DA+HHbHOw2Pbpbo4WgmNmRKyNxvn4SbF0OdLd+EmnYOm6LrHbPUou+/RzXNxmkci1nE4tv7x4g0Hpv5rk9W7a9pdWzXZU2s5sFm2RYs74mR+gDSLHqd/VANqel612cmZBqmFNiOcXOjbK1r2ONcJo7tdtYIB6hE6BomtdqHZMWkY0c74Y29+IhFD4XHYH5b+X1XoHw+1mTt3peodlu1D/ALU8Qd9j5LgO8Aur/aaS0g899/WPwPglwtW7S489GbHbFFJ5cTXSA/wKDzCRksRdi5Acx0MjmujdsWPGzv4b/T0Wvj9m9Vk0R2tNxh+j2u4TN3jdjxBtcN3zIHJdZ270zE1/TMPttoTP1GW1ozogN438rd7+F30B5ElbOkwO/wDhzIjrfv8Ae+v65qDm+zXZHVtTxBmYeL3kBcW33jRuPqVuz9l9ZwcSSfIxeCKMW53esND2K2tCbkx/DfMGEJ/tAlPAISQ+y5t1XouayX67Hjl2YdTbCdnfaO8DT6eJAI97mizSyM7LDhwjmp52aQOEc1lOkLnXQQSdurIW8Rqq+qqiBPNamm4xmdZHWkGhp2P3Za5zaC6LF+QiyK9FXiQCBgaG2B7oqGI0SK39UHz8kE6SBJwU1JIHTpUps4Q9peziYHAuZxVxC9xfS0HuvZzQIsL4R/o7L1bE0jI1pplknyiAOF9eGi4b92GiullE/Dns3pej42q6Me0+m6zj6m3fGhc0EeEtdQD3Xbf+1eT9ue2eT2ykwjkYkWJDhscyOGJxc3erO4HkBX181k9ntUm0HWsPVcNrTNiycbWnk4VRaT5EEj3QdP8AD7T5tI+LOn6bkgmbFy54nn/NwxyUfcUfcIb4quA+IeuGx/iR/wDiZ/JKbtrLL26h7Ws0yCPJjFuxxIeGR3A5l3V3RHToF0c3xZM8pln7KaVJI47ve63HbzLd9kBvwre3XOw/aLsr3rWZcrXywFxq2vaGg/QOAv8AaC8xzMXIwMuTEzoX42TE7hfDKKc0/Ty9eSN/TGVHr0us6cTgZLp3yxjH2EXEflHmKNV5LuYfi1mSxMGqaDpudLHsJSSyvYh38R+SAr4MaW7Tvt/anUQcfAixHRxSSAgSAkOc4eYpg9zSM+DGQ7M1jtRmOaWfaOGbh8uJ8riP3rju1XbfWO07Bj5b4sfCa4EY0Fhjj5uP3q/D0vdW9he0uT2YkzH42HHkHLY1ju8eW8IaXcqH+0g0vhbrTNOe7S9QIfpeoR93M13Jrqq/oRsfbyXomp6R+hOwmdgh1xsmDozfNplaQvJMCIwtpzRwgVv5LscjtdmZHZ9ukZMLH21re/c7xU1wIv2FWg6PQ8rIwPh/lZOLLwTRynhdwg14mjkdlxuu9qdUzsR2FnZXeROIJbwMHI3zAR2lds36RpjsA4UGRGXl57wmiT6IDWu3jc/AycJuh4MPfMLRK35m315IORlkMjrUKUm7qbW2aCB4GuJobrp9IbwVxDmFm6finisNtdBjMY0gEcvJBoRTgfMCrRJfyktCHY3a9lQ+XxnhOyDw5OlSekCtPQUQFIWgfZOmCkgiApBOnAQaGLpE8+iZmqNkjEePI2Pu3fM8W0Ej9njZ/q9Efj9nu/dhxszY+9yIoJSws/w+9kYwD5rPzg9OXVYgjbzAHEOTqpWNYKIIBCDbGgZA0E6s98bGCMl0DwRI1wm7vhI6Hm6/SkWzs3TNOfJnsibnQPmaXxnwBrWvI2Jvwkn6tI6rnY4wK2Ar05K9sYuhVkbikGppujnOxopmytEk2U3HjicAN6BLib2G/ktyDs86N0lTRuZHN3feEeAguiDXE9OIS8Q9GOXIyaliYD+B7XukIsho+Ue5C6LTZIMqBk7P8M3w30/kg6GbSzjRTySPd3cXd2DH4vHfMXtXDy57i6QmaxmLkzQtk4+7e5hdVcRBr18kMBw/KAPpsg8qct67figqzpTdClm2S6yrJZC9/VQCCyMOR2Iwl/IlDwN4jQW7gQ7eEC/VAbprGtqid/NazLDbJF/RBRwBtcPREWQzcgIHkmDWkcQ2Wc7I8bvEnzpWtjPmVlxEvLjaDzUJ0gn2QPQSpJOgVJBOApIGAUmhO1SAQO0FXNCg0K4CkE2BU5uoNwHRhsYkkJ4nB3QImRzceB80mzG/vXLTzPnmdLIbc42UBeXNHqGb3sbO7LgLYXXZApdpoOFNhYBinpsnETwcQNfSl57e/mF3nZrUXZen8c28kTuAuPX1/eg1p5nM6hZeRMXGlflS3yQW/FZCBMeeKyrGgE0qwFfGwl1hAViMuSlv4zS00szEiogkblasDiHWRSApkriaSkyu7bTqKe28NjmszMcAatBTkyuldV2PRSxR83shW0XWdvorIsiGEkTTRsJAIDnIPOqSCdJA6SSdA4TpKQCBAK1oUWhWtCCTaRGPGXKEbLWphwbXSDM7RxBukAuLgWyNoDr9Vyi7ztDgS5mnGHGDXSBwdXFVgLg0CXT9lpKwJ2jn3n5D+S5ddToTWDTmFvNziT9eX8Ag0XPJ5pcZUSkWlBYzxclpYcY6hBY8ZcaC2sWKuaAuFjWAWOXQIwtBFqiJtG3c1b3gDaQUzSkNpZM8pLifJFZslCwdlyur63wuMOIQ54+Z/l9PNAZqmsMwmd3HTpzu1v8Al9T/ACWDjzS5Usss7y95qy735IB29lxLiep5n6o3TxvJ7fmgFtOnACevRAyQUgFINBQIBTAThhUgPPb6oHaFaxtmhukxt9EbjQW6zQ+iCeLAeoWtEOBtbKmCGuZRHJBGY/qyBzogX0Xm+Rjy40zoZ2Fj28wV6W8tLeKxS4nLrU9YcGNJY5237IFFBi0fJdJoR/8ArgL5ucg9VwcfGMQhYRxcV25a2Azu8KFoO/DZ2QEWroW8RpVAI3GiPFaAvGip1lasNH5ghYmgcwieIDkgIBAO/wCKGyp2xtc5zg1rRbiegUMvMhxYXSTyNZG0WSVwmt63LqLixjSzHB2Ze7vV38kF2tay7Nc6LFtsDTXEDu/+ixmiuXukBba9KryUgEDkIrT+cnt+aFRmn85Pb80Ao2VgcVBTApBIBWtYVWFa0H/Mgk0elK5rG9PEqw4u5q+CPiNcvogtgxw40CVq42M4C+FQxoGxuaf8xpabNmfqzaClreD5lZwgi7CdvC00839VTKWtbVoMftLlCDF7pjiZZTRA6DqszR8cxY7skjd1tbXMD+/4IfNm/SupeCw0UL/2RzP9+i1WuEcYYNmNoeyDI1R/eZbWDo2voStiKu78BDmihYNrByGvzdQeMYWDW45Clu6bh/Z4BHdkm3Gq/cgLx2XzWpixhDY0R8kczYkDogKaA40QhtQzoNPgMuS/hF01o3Lz5BB6rrMWnx1JTpi3wR3+8+i4vMy586d0+RIXPIoDkGjyHkP73QX6pqM2pZPeS01jT4IxyH9f72QhaEwT2gcUE1pFMSglaK0/nJ7fmg7Ren85Pb80FYCmGki0ytb8tIFw1zU+Bzeidov5/wByuia5217oGibxcgtPHgaDxEUFVjwenutSOMMfR8QQWQt4fl2o2Fa12/kPRQJrkCq5JCDQIQWSyU62tpAZkjebXbJsjII9fouf1TLe93cxGiedfwQU6VH3E04BDqoAjyVmoZBZG6IHdwsqyBjcXHAPPmT6oXHiOXkGR+4BQH6TAYYbIHE83a2cdrj0VGPECK6DktbGiA6ILcagAT1WdrmuxYQMONwyZHInpH9fM+iB1rXgxsmNg7kfPN5eg/muaq9zZJ3N9Sgd73yPdI9xdI7m5ycUEwISu0DpkkkDkJuEqSSCCL0//wDT1r80NzReB9/2/NBFotWN2TMCsaLQTZR6IrHaeLi6qmKMlaMEYCAvGjdw8vCimOY0eMi0O1zmtq0gR0FILXyUh5ZKHIWlK71QOTLwiyUFOVLwNLhyCw8fifPxH5ibNq/KynPBA5FDxSFu45oLsqQyO7oHZaGDB3TAAN+qGwIBKeNy1rjgYXyuDWjmUBcPBGwueQA3mT0WLq+tuygYMLwQXTnA13n9EHqOoPzHloJZAOTB976oPhFixyCBcthyHIeScuDVE2pNHmgaipAJ0kCTgJUlaBE0o3aTt0moHDSjMDbvPb80KisH7/t+aD//2Q==`}
                  alt=""
                />
                <div className="mx-4 ">The Matric</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>SiFi</td>
              <td className="text-red-800">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
