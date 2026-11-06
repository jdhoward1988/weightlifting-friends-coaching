# How to edit the coaching page

The page is split into two parts:

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word, price, link and photo | **Yes, this is the only file you edit** |
| `index.html` | The design: layout, fonts, colours | No. Leave it alone so the design stays your baseline |
| `images/` | Your photos | Add new photos here |

## Easiest way: the editor
Open `edit.html`, either by double-clicking it in the unzipped folder on your computer or from your live site (e.g. `https://yourname.github.io/coaching/edit.html`). The live preview works both ways, on phone and computer.
- Each section of the page is a panel. Open one and the preview jumps to that part of the page.
- Type in any box and the preview updates as you go.
- **Photos:** tap **Replace photo**. It's resized for the web automatically. Tap the photo to choose the part that stays in frame, and pick its look.
- **Lists:** use ↑ ↓ to reorder, ✕ to remove, and **+ Add** for a new item.
- Your edits are kept on that device until you download them, even if you close the page.
- When you're done, tap **Download update**:
  - Text-only changes download a new `content.js`. Upload it to GitHub.
  - With new photos, you get `page-update.zip`. Unzip it and upload `content.js` and the `images` folder together.
- Search engines are asked not to list the editor, and it can't change your site by itself. Nothing goes live until you upload.

## Editing by hand instead

### Change words or prices
1. On GitHub, open `content.js` and click the pencil icon.
2. Find the section (they're labelled, e.g. `/* ---------- Coaching options and prices ---------- */`).
3. Change the text between the "double quotes". Keep the quotes and the comma after them.
4. Click **Commit changes**.

### Swap a photo
1. Upload the new photo into the `images` folder (on GitHub: open `images`, then **Add file → Upload files**).
2. In `content.js`, change the photo's `file:` to the new name, e.g. `file: "images/new-photo.jpg"`.
3. Update `alt:` to describe the photo (for screen readers and Google).
4. Choose a `style:`, either `"bw"`, `"natural"` or `"warm"`.
5. If the crop cuts off the wrong part, adjust `focus:`. `"50% 50%"` is the centre, `"30% 50%"` keeps more of the left, and `"50% 20%"` keeps more of the top.

### Add or remove an item
Lists include FAQ questions, results rows, plan features, meet-day rules and steps.
- **Add:** copy one whole `{ ... },` block (or one `"...",` line for simple lists) and paste it below the last one.
- **Remove:** delete the whole block or line.
- Numbering (01, 02, 03…) updates itself.

### Hide something
- **Lift Audit strip:** set `show: false`.
- **Badge on a plan:** set `badge: ""`.
- **Highlighted plan:** set `featured: true` on the plan you want in black.

### Check your edit
Open your page with `?preview` on the end, e.g. `https://yourname.github.io/coaching/?preview`.
- **Green bar:** everything loaded.
- **Red bar:** a quote or comma is missing. The page shows its backup copy until you fix it, so visitors never see a broken page.

## Undo anything
GitHub keeps every version. Open the file and click **History**, pick the version you want, and copy it back.

## Want a design change?
Changes to the layout, colours, new sections or fonts belong in `index.html`. Ask Claude to change only that part, so the rest of the design stays as it is.
