<template>
  <div
    class="n-upload bg-app-light"
    :class="{
      'border rounded-md': files.length,
    }"
  >
    <div v-if="files.length" class="flex items-center mx-4 my-2 space-x-2">
      <div class="flex-grow-0">
        <NButton type="button" class="sm danger" @click="removeFiles">
          Cancel
        </NButton>
      </div>
      <div class="flex-grow text-center text-xs">
        {{ files.length }} {{ files.length > 1 ? "files" : "file" }} selected
      </div>
      <div class="flex-grow-0">
        <NButton type="button" class="sm outline" @click="openFileDialog">
          Add {{ multiple ? "more" : "file" }}
        </NButton>
      </div>
    </div>
    <div
      class="text-center"
      :class="{
        'h-44 min-h-full border border-dashed rounded': !files.length,
        'border-t border-b': files.length,
      }"
    >
      <NOverlayScrollbar
        v-if="files.length"
        :options="{ scrollbars: { autoHide: 'scroll' } }"
        class="h-52"
      >
        <draggable
          v-model="files"
          class="files grid p-4 grid-cols-3 gap-3 md:grid-cols-4 md:gap-4"
          group="files"
          draggable=".files-item"
          @start="drag = true"
          @end="drag = false"
        >
          <div
            v-for="file in files"
            :key="file.id"
            class="files-item border rounded h-32 w-32 relative"
          >
            <img
              v-if="file.thumb"
              class="object-cover object-center w-full h-full text-transparent cursor-pointer"
              :src="file.thumb"
            />
            <div
              class="absolute bottom-1 w-full px-2 text-gray-200 text-center text-xs"
            >
              <div class="truncate filter drop-shadow-xl">
                {{ file.name }}
              </div>
              <div>({{ formatSize(file.size) }})</div>
            </div>

            <div
              class="w-2 h-2 rounded-full absolute top-1 left-1 border"
              :title="file.error"
              :class="{
                'bg-gray-300': !file.active,
                'bg-info': file.active,
                'bg-success': file.success,
                'bg-danger': file.error !== '',
              }"
            ></div>
            <div
              class="w-5 h-5 rounded absolute top-1 right-1 cursor-pointer"
              @click="removeFile(file)"
            >
              <NIcon icon="delete" class="text-danger xs" />
            </div>
          </div>
        </draggable>
      </NOverlayScrollbar>
      <div v-else>
        <div
          class="flex content-center items-center text-xs text-center cursor-pointer h-44"
          @click.stop="openFileDialog"
        >
          <div class="w-full">
            Drop files anywhere to upload or
            <label class="text-secondary" for="file">click here</label>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="files.length"
      class="flex items-center justify-between mx-4 my-2"
    >
      <div>
        <NButton
          v-if="!$refs.upload || !$refs.upload.active"
          type="button"
          class="sm success"
          :disabled="$refs.upload && $refs.upload.uploaded"
          @click.prevent="$refs.upload.active = true"
        >
          Upload {{ unUploadedFiles.length }}
          {{ unUploadedFiles.length > 1 ? "files" : "file" }}
        </NButton>
        <NButton
          v-else
          type="button"
          class="sm danger"
          @click.prevent="$refs.upload.active = false"
        >
          <i class="fa fa-stop" aria-hidden="true"></i>
          Stop Upload
        </NButton>
      </div>
      <div v-if="$refs.upload && $refs.upload.uploaded" class="text-xs">
        All files have been uploaded
      </div>
    </div>

    <file-upload
      v-show="false"
      id="upload"
      ref="upload"
      v-model="files"
      :post-action="endpoint"
      :drop="true"
      :drop-directory="true"
      :extensions="extensions"
      :accept="accept"
      :headers="headers"
      :multiple="multiple"
      :size="1024 * 1024 * 15"
      :thread="thread"
      @input-filter="inputFilter"
      @input-file="inputFile"
    >
    </file-upload>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FileUpload from "vue-upload-component";
import NOverlayScrollbar from "@/components/NOverlayScrollbar.vue";
import NButton from "@/components/NButton.vue";
import NIcon from "@/components/NIcon.vue";

export default {
  name: "NFileUpload",
  inheritAttrs: false,
  components: {
    draggable,
    FileUpload,
    NButton,
    NIcon,
    NOverlayScrollbar,
  },
  data: () => ({
    files: [],
    unUploadedFiles: [],
  }),
  props: {
    thread: {
      type: Number,
      default: 4,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    endpoint: {
      type: String,
      default: undefined,
    },
    extensions: {
      type: [String, Array, RegExp],
      default: undefined,
    },
    accept: {
      type: String,
      default: undefined,
    },
    headers: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeFiles() {},
    openFileDialog() {},
    removeFile() {},
    inputFilter() {},
    inputFile() {},
    formatSize() {},
  },
};
</script>

<style lang="postcss" scoped>
.n-upload {
  .text-shadow {
    text-shadow: 1px 1px #aaa;
  }
}
</style>
