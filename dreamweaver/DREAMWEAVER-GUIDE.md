# Dreamweaver version: how to use it

This folder is the same page as the content.js version, set up as a **Dreamweaver template**:

| File | What it is |
|---|---|
| `Templates/coaching.dwt` | The locked design. Only open it to change the design itself. |
| `index.html` | Your page. Only the editable regions can be changed. |
| `images/` | Your photos |

## 1. Set it up (once)
1. Unzip this folder somewhere permanent.
2. In Dreamweaver, go to **Site › New Site**. Name it "Weightlifting Friends" and set **Local Site Folder** to this folder.
3. Open `index.html`. Switch to **Design** or **Split** view (View menu) to see the editable regions outlined with their names. Everything else is locked.

## 2. Everyday edits

**Text:** click inside any outlined region and type. There are 49 regions, e.g. *heroHeadline*, *storyText*, *meetIntro*.

**Swap a photo**
1. Put the new photo in `images/`. Aim for 1600 px on the long side; Lightroom or Photoshop export is ideal.
2. Click the photo inside its region (e.g. *heroPhoto*, *teamPhotoTall*) and change **Src** in the Properties panel.
3. Update **Alt** with a short description.
4. **Look:** in Code view, the photo's `class` is `bw`, `natural` or `warm`.
5. **Crop:** in Code view, change `object-position:38% 50%` in its `style`. `50% 50%` is the centre, a lower first number keeps more of the left, and a lower second number keeps more of the top. Some photos have no style yet; add `style="object-position:50% 50%"` if needed.

**Add, remove or reorder list items**
Results, lifter types, meet-day rules, plans, steps and FAQ are **repeating regions**. In Design view, each one has a tab with **+ − ▲ ▼** buttons.
- Click **+** to add an entry, then fill it in.
- **Numbers (01, 02…) don't update themselves here.** Edit them inside each entry.
- **Plans:** each card is one editable block. To make a card the black featured one, change `class="plan"` to `class="plan featured"` in Code view and add the pink badge line; copy it from the current Coached card.

**Hide the Lift Audit:** delete everything inside the *liftAudit* region.

**The Turnover Creative link** (header and footer): **Modify › Template Properties › turnoverLink**.

**Other links** (Apply button, gym, TrainHeroic, Instagram): select the link in its region and change **Link** in the Properties panel. Replace each `APPLY_LINK` / `INPERSON_LINK` placeholder.

## 3. Change the design (rarely)
Open `Templates/coaching.dwt`, make the change, and save. When Dreamweaver asks to **Update** pages based on the template, click **Update**. Your text and photos stay as they are.

## 4. Publish
- **Git panel (Window › Git):** connect this folder to your GitHub repository, then Commit and Push.
- **Or:** upload `index.html` and `images/` on GitHub as usual.
- The `Templates` folder isn't needed online. Uploading it does no harm, but you can leave it out.

## 5. Fair comparison with the content.js / editor version
Time each job in both setups:
- [ ] Swap the hero photo and fix its crop
- [ ] Change the Coached price
- [ ] Add a new meet-day promise
- [ ] Add a FAQ question
- [ ] Do one of the above from your phone

For each, note: How long did it take? Could you have broken the design by accident? How many steps to get it live?
