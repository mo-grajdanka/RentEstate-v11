document.addEventListener("DOMContentLoaded", () => {
  const sitesData = window.dataByPurpose?.land || [];
  const sitesBlock = document.getElementById("sitesBlock");
  const siteList   = document.getElementById("siteList");

  if (!sitesData.length) {
    sitesBlock.classList.add("hidden");
    return;
  }

 
siteList.innerHTML = sitesData.slice(0, 4).map(site => {
  const listUrl = `pages/list.html?place=${encodeURIComponent(site.place)}`;
  return `
    <div class="property-card bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      <!-- фиксированная высота блока с картинкой -->
      <div class="h-40 w-full overflow-hidden">
        <img src="${site.images?.[0] || ''}" alt="${site.name}"
             class="w-full h-full object-cover"
             onerror="this.src='https://placehold.co/400x200?text=No+Image'">
      </div>

      <div class="p-4 flex flex-col h-full">
        <h3 class="font-semibold leading-tight mb-2 min-h-[2.5rem]">${site.name}</h3>

        <p class="text-gray-500 text-sm mb-1">${site.place}</p>
        <p class="text-gray-600 text-sm mb-3">Площадь: ${site.area} м²</p>

        <a href="${listUrl}"
           class="mt-auto text-blue-600 hover:text-blue-800 font-medium flex items-center">
          Подробнее <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  `;
}).join("");


});
