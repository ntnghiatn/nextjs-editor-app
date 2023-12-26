"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import RawHTML from "@editorjs/raw";
import CheckList from "@editorjs/checklist";
import SimpleImage from "@editorjs/simple-image";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import Table from "@editorjs/table";
import NestedList from "@editorjs/nested-list";
import TextVariantTune from "@editorjs/text-variant-tune";
import Underline from "@editorjs/underline";
import InlineCode from "@editorjs/inline-code";
import CodeTool from "@editorjs/code";
import Warning from "@editorjs/warning";
import Marker from "@editorjs/marker";
import AttachesTool from "@editorjs/attaches";
import Delimiter from "@editorjs/delimiter";

interface PropTypes {
  setOutputData: Dispatch<SetStateAction<OutputData | null>>;
}

const ContentEditor = ({ setOutputData }: PropTypes) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Write your post content here...",
      // onReady: () => {
      //   editorRef.current = editor;
      // },
      onChange: async () => {
        const content = await editor.saver.save();
        setOutputData(content);
      },

      tools: {
        header: { class: Header, inlineToolbar: true },
        list: { class: NestedList, inlineToolbar: true },
        checklist: {
          class: CheckList,
          inlineToolbar: true,
        },
        // FIXME: some fix need
        linkTool: {
          class: LinkTool,
        },
        rawHtml: RawHTML,
        image: {
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            placeholder: "Paste image URL",
          },
        },
        embed: {
          class: Embed,
          config: {
            service: {
              youtube: true,
              facebook: true,
              instagram: true,
              twitter: true,
              codepen: true,
              pinterest: true,
            },
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        textVariant: TextVariantTune,
        underline: Underline,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        code: CodeTool,
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+W",
          config: {
            titlePlaceholder: "Title",
            messagePlaceholder: "Message",
          },
        },
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        attaches: {
          class: AttachesTool,
          config: {
            // FIXME: fix the path
            endpoint: "http://localhost:8008/uploadFile",
          },
        },
        delimiter: Delimiter,
      },
    });

    return () => {
      if (editor)
        editor.destroy;
    };
  }, [setOutputData]);

  return <div id="editorjs"></div>;
};

export default ContentEditor;
