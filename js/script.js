async function loadMyArchives() {
    try {
        // Plus besoin de passer l'ID, le PHP le sait déjà grâce au cookie de session
        const response = await fetch('api/get_user_cv.php');
        const archives = await response.json();
        
        const listContainer = $('#archives-list'); // Assurez-vous d'avoir cet ID dans votre HTML
        listContainer.empty();

        if (archives.length === 0) {
            listContainer.append('<p class="text-xs text-slate-400">Aucun CV sauvegardé.</p>');
            return;
        }

        archives.forEach(cv => {
            listContainer.append(`
                <div class="flex justify-between items-center p-2 border-b border-slate-100">
                    <div>
                        <p class="text-sm font-bold">Projet #${cv.id}</p>
                        <p class="text-[10px] text-slate-400">${cv.created_at}</p>
                    </div>
                    <button onclick="loadSpecificCV(${cv.id})" class="text-indigo-600 hover:text-indigo-800">
                        <i data-lucide="folder-open" class="w-4"></i>
                    </button>
                </div>
            `);
        });
        lucide.createIcons();
    } catch (err) {
        console.error("Erreur de chargement:", err);
    }
}