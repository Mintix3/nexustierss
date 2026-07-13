/* ============================================================
   NEXUS TIERS — PLAYER DATA FILE
   ============================================================
   This is the file you edit to add, remove, or update players.
   You don't need to touch index.html, style.css or script.js —
   just edit the list below and save this file, then refresh
   the page in your browser.

   IMPORTANT: once you've logged in as admin and added/edited any
   players through the site itself, your browser saves that roster
   (in localStorage) and will use it instead of this file on future
   loads — so this file only acts as the "starting roster" the very
   first time the site is opened in a given browser, or after that
   saved data is cleared. To reset back to this file's list, clear
   the site's local storage (or use the browser's "Export Data" /
   "Import Data" buttons to manage snapshots directly).

   HOW TO ADD A PLAYER
   --------------------
   Copy one of the blocks between { } and fill in:

     username : the player's exact Minecraft username
                (used to fetch their real skin)

     region   : one of  "NA"  "EU"  "AS"  "OTHER"

     tiers    : one line per kit. Only these kit names are used:
                  vanilla, sword, axe, nethpot, smp, uhc, mace

                Each kit's value must be one of:
                  "HT1"  "HT2"  "HT3"  "HT4"  "HT5"   (High Tier — best)
                  "LT1"  "LT2"  "LT3"  "LT4"  "LT5"   (Low Tier)
                  "none"                                (not ranked in that kit)

   Points are calculated automatically from tiers, so you never
   need to type points in by hand.

   You can also add/edit/delete players from inside the site
   itself with the "+ Add Player" button — this file is just a
   convenient way to bulk-load or bulk-edit a whole list at once.
   ============================================================ */

  /* Add your own players below this line, following the same pattern:

  {
    username: "YourIGN",
    region: "NA",
    tiers: {
      vanilla: "none", sword: "none", axe: "none",
      nethpot: "none", smp: "none", uhc: "none", mace: "none"
    }
  },

  */
];
