const input = document.getElementById("filter");
const status = document.getElementById("filter-status");

if (input) {
    const rows = Array.from(document.querySelectorAll("table tr"))
        .filter((row) => row.querySelector("td"));   // skips the header row

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        let shown = 0;

        rows.forEach((row) => {
            const match = row.textContent.toLowerCase().includes(query);
            row.hidden = !match;
            if (match) shown++;
        });

        status.textContent = query
            ? (shown ? `Showing ${shown} of ${rows.length} resources.` : "No resources match your search.")
            : "";
    });
}

/* the filter content taken & modified from Claude with the prompt: "I want to add a "challenging element" to my website with advanced css or javascript to give it some flare. I think it would be cool to make my table collapsible. What do you think should I do that or something else?" (Claude then suggested that a search/filter feature would be more helpful and provided base code that I could use to add it)
Claude. (2026). Claude (Sonnet 5.5 November 22nd version) [Large language model]. */