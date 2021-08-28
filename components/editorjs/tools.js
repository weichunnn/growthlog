import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import NestedList from '@editorjs/nested-list';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import ImageTool from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import Alert from 'editorjs-alert';
import Underline from '@editorjs/underline';

import { uploadJournalImage, getPublicURL } from '@/lib/db';

export default {
  header: {
    class: Header,
    config: {
      placeholder: 'Enter a header',
      defaultLevel: 1
    }
  },
  alert: {
    class: Alert,
    inlineToolbar: true,
    config: {
      defaultType: 'primary',
      messagePlaceholder: 'Enter something'
    }
  },
  embed: {
    class: Embed,
    config: {
      services: {
        facebook: true,
        instagram: true,
        twitter: true,
        youtube: true,
        pinterest: true,
        gfycar: true,
        imgur: true
      }
    }
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3
    }
  },
  underline: Underline,
  // paragraph: Paragraph,  --> removed to enable inline toolbar
  list: {
    class: NestedList,
    inlineToolbar: true
  },
  code: Code,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: 'http://lvh.me:3000/api/getUrlMeta'
    }
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const currentDate = new Date()
            .toLocaleDateString('en-UK')
            .replaceAll('/', '-');
          const pathToSave = `${currentDate}/${file.name}`;
          let publicURL = '';
          let successState = 1;

          try {
            await uploadJournalImage(file, pathToSave);
            publicURL = await getPublicURL(pathToSave);
          } catch (e) {
            successState = 0;
          } finally {
            return {
              success: successState,
              file: {
                url: publicURL
              }
            };
          }
        }
      }
    }
  },
  raw: Raw,
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: "Quote's author"
    }
  },
  marker: Marker,
  checklist: {
    class: CheckList,
    inlineToolbar: true
  },
  delimiter: Delimiter,
  inlineCode: InlineCode
};
