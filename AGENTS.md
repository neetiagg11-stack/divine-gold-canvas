<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Maintain leaf-route metadata and static public crawler files so each public page is independently discoverable.
- Keep verified external brand sources separate from this site's identity; referencing Indriya does not establish brand ownership or editorial review.
- Keep user-supplied social and community references distinct from verified brand identity links; use only primary product sources as specification citations.
- Centralize brand source URLs and product structured data in browser-safe library modules, with regression tests for unsupported offers/ratings and gold-weight semantics.
- Keep project editorial identity and contact details in a shared browser-safe module; scheduled dates must not be emitted as completed publication dates.
