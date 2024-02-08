export default function Home() {
  return (
    <div>
      <div class="p-6 flex flex-row gap-1 justify-around">
        <img src="../images/logoakapay.png" class= "w-40 h-12" alt="logo akapay um produto AKASOFT" />
        <ul class="basis-1/2 flex flex-row gap-3">
          <li class="basis-1/2 text-center align-middle font-700">Sobre</li>
          <li class="basis-1/2 text-center align-middle font-700">Preços</li>
          <li class="basis-1/2 text-center align-middle font-700"><a href="#">Produto</a></li>
        </ul>
        <button class="basis-1/6 text-white font-medium rounded-full text-center me-2 outline outline-offset-1 outline-white w-194 h-65 ">Entre</button>
      </div>

      <div class='flex flex-row justify-center'>
        <div class="flex flex-col gap-20 w-2/4">
          <div>
            <p class="font-bold text-base">COMECE DIMINUINDO SUA INADIMPLÊNCIA</p>
            <h1 class="font-bold text-7xl leading-extra-extra-loose ">Pagamentos de Tributos Nunca  foram tão Fáceis</h1>
            <span class=" font-bold text-base size-2 text-[#C2C2C2]  ">Lorem ipsum, dolor sit amet consectetur adipisicing   elit. Architecto ad quam et? Incidunt eligendi cum doloremque veniam asperiores illo,   soluta aut, eius vitae voluptatum fugit architecto eveniet eos porro sequi.</span>
          </div>
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-44 sm:align-middle"> Fale conosco</button>
          <p class="inline text-[#C2C2C2] font-bold ">Conheça nosso produto de pagamentos <a class ='text-[#1E88E5] underline underline-offset-4 'href="#">aqui</a></p>
        </div>
        <div class=" ">
          <img src="../images/akapaycards.png" class="" alt="cartões de crédito." />
        </div>
      </div>
    </div>
  );
}
