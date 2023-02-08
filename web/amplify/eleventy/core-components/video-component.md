---
title: Video component
components:
    video:
        type: core-components
        name: video
        data:
            iframe:
                title: Why do cats act so weird?
                width: "560"
                height: "315"
                src: https://embed.ted.com/talks/lang/en/tony_buffington_why_do_cats_act_so_weird
                fullscreen: true
                caption: "<p>They're cute, they're lovable, and judging by the 26 billion views on over 2 million YouTube videos of them, one thing is certain: cats are very entertaining. But their strange feline behaviours, both amusing and baffling, leave many of us asking: Why do cats do that? Tony Buffington explains the science behind some of your cat's strangest behaviours.</p><a href='https://www.ted.com/talks/tony_buffington_why_do_cats_act_so_weird/transcript'>Video transcript</a>"
---

{{ pageComponents(components) }}

Considerations
--------------

The `iframe` must always include a unique, descriptive `title` attribute to meet [WCAG Success Criterion 2.4.1: Bypass Blocks (A)](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) and [WCAG Success Criterion 4.1.2: Name, Role, Value (A)](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html).

### Captions

Prerecorded video must include captions to meet [WCAG Success Criterion 1.2.2: Captions (Prerecorded) (A)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html).

[More advice about audiovisual media captions](https://www.w3.org/WAI/media/av/captions/).

### Transcripts

Transcripts for prerecorded video are required to meet [WCAG Success Criterion 1.2.8: Media Alternative (Prerecorded) (AAA)](https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html).

[More advice about audiovisual media transcripts.](https://www.w3.org/WAI/media/av/transcripts/)