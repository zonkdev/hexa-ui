<template>
  <div
    id="app"
    class="antialiased leading-none md:flex md:flex-cols md:items-center md:justify-center bg-gray-100"
  >
    <div class="pb-36 mx-auto my-10">
      <div class="flex flex-row gap-x-2 mb-4">
        <NIcon class="xs" />
        <NIcon class="sm" />
        <NIcon class="md" />
        <NIcon class="lg" />
        <NIcon class="xl" />
        <NIcon class="xxl" />
      </div>

      <div class="flex flex-row gap-x-2 mb-4">
        <NIcon class="text-primary" />
        <NIcon class="text-secondary" />
        <NIcon class="text-danger" />
      </div>

      <div class="flex gap-4 mb-4">
        <NButtonGroup>
          <NButton icon="home" @click="onClick" class="lg primary">
            Example
          </NButton>
          <NButton icon="home" disabled class="md secondary">Example</NButton>
          <NButton icon="home" class="sm info">Example</NButton>
        </NButtonGroup>
      </div>

      <div class="flex gap-4 mb-4">
        <NButton>Example</NButton>
        <NButton class="primary">Example</NButton>
        <NButton class="secondary">Example</NButton>
        <NButton class="success">Example</NButton>
        <NButton class="info">Example</NButton>
        <NButton class="danger">Example</NButton>
        <NButton class="outline">Example</NButton>
      </div>

      <div class="flex gap-4 mb-4">
        <NButton class="lg">Example</NButton>
        <NButton class="md">Example</NButton>
        <NButton class="sm">Example</NButton>
        <NIconButton icon="home" class="xl" />
        <NIconButton icon="home" class="primary lg" />
        <NIconButton icon="home" class="secondary md" />
        <NIconButton icon="home" class="info sm" />
        <NIconButton icon="home" class="danger xs" />
      </div>

      <div class="flex gap-4 mb-4">
        <NToggleButton :value="true" />
        <NToggleButton :value="true" class="primary" />
        <NToggleButton :value="true" class="secondary" />
        <NToggleButton :value="true" class="info" />
        <NToggleButton :value="true" class="danger" />
      </div>

      <div class="flex gap-4 mb-4">
        <NToggleSwitch :labels="true" :value="true" />
        <NToggleSwitch :labels="true" :value="true" class="primary" />
        <NToggleSwitch :labels="true" :value="true" class="secondary" />
        <NToggleSwitch :labels="true" :value="true" class="info" />
        <NToggleSwitch :labels="true" :value="true" class="danger" />
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NBullet class="text-primary sm" />
        <NBullet class="text-secondary md" />
        <NBullet class="text-info lg" />
        <NBullet class="text-danger xl" />
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NBadge>Badge</NBadge>
        <NBadge class="primary">Badge</NBadge>
        <NBadge class="secondary">Badge</NBadge>
        <NBadge class="success">Badge</NBadge>
        <NBadge class="info">Badge</NBadge>
        <NBadge class="danger">Badge</NBadge>
        <NBadge class="outline">Badge</NBadge>
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NAvatar fullname="John Doe" />
        <NAvatar class="primary" fullname="John Doe" />
        <NAvatar class="secondary" fullname="John Doe" />
        <NAvatar class="info" fullname="John Doe" />
        <NAvatar class="danger" fullname="John Doe" />
      </div>

      <div class="flex flex-row gap-x-4 mb-4">
        <NAvatar
          class="xs"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="sm"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="md"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="lg"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="xl"
          status="dont_disturb"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
        <NAvatar
          class="xxl"
          status="online"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg"
        />
      </div>

      <div class="flex flex-col gap-y-2 mb-4">
        <NForm>
          <NFormSection caption="Caption" description="Lorem ipsum dolor">
            <NInputGroup label="Title">
              <NInput v-model="form.title" placeholder="input ..." autofocus />
            </NInputGroup>

            <NInputGroup label="Slug">
              <NInput
                prefix="https://localhost:8080/"
                :value="
                  form.title
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
                "
                placeholder="input ..."
                disabled
              />
            </NInputGroup>

            <NInputGroup label="Description">
              <NInputText
                :rows="3"
                v-model="form.description"
                placeholder="input ..."
              />
            </NInputGroup>

            <NColumn>
              <NInputGroup label="Catgeory">
                <NSelect v-model="form.category" :options="categories" />
              </NInputGroup>

              <NInputGroup label="Weight">
                <NInput
                  v-model="form.weight"
                  suffix="gram"
                  type="number"
                  placeholder="input ..."
                />
              </NInputGroup>
            </NColumn>

            <NInputGroup label="Price">
              <NInputCurrency
                v-model="form.price"
                autofocus
                placeholder="Input price"
              />
            </NInputGroup>

            <NInputGroup label="Tags">
              <NInputTag
                v-model="tag"
                :tags="form.tags"
                @tags-changed="(newTags) => (form.tags = newTags)"
              />
            </NInputGroup>

            <NInputGroup label="Discount">
              <NToggleButton
                class="secondary"
                v-model="form.enableDiscount"
                :options="[
                  {
                    label: 'Off',
                    value: 'off',
                  },
                  {
                    label: 'On',
                    value: 'on',
                  },
                ]"
              />
            </NInputGroup>

            <NInputGroup label="Public">
              <NToggleSwitch
                class="secondary"
                :labels="{ checked: 'Yes', unchecked: 'No' }"
                v-model="form.isPublic"
              />
            </NInputGroup>

            <NInputGroup label="Media">
              <NFileUpload
                ref="mediaUpload"
                :value="form.medias"
                extensions="gif,jpg,jpeg,png,webp"
                accept="image/png,image/gif,image/jpeg,image/webp"
              />
            </NInputGroup>
          </NFormSection>

          <NFormAction />
        </NForm>

        <pre>{{ form }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import {
  NAvatar,
  NBadge,
  NBullet,
  NToggleButton,
  NToggleSwitch,
  NButton,
  NColumn,
  NInput,
  NInputCurrency,
  NInputTag,
  NInputText,
  NSelect,
  NIcon,
  NIconButton,
  NButtonGroup,
  NInputGroup,
  NFileUpload,
  NForm,
  NFormAction,
  NFormSection,
} from "@/components";

export default {
  name: "App",
  data: () => ({
    tag: "",
    categories: ["Category 1", "Category 2", "Category 3"],
    form: {
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      description:
        "Cupiditate cumque quidem vitae ad est libero vel suscipit laboriosam beatae, ex perferendis aliquid nobis qui, quam veniam facere",
      category: "Category 1",
      weight: 200,
      price: 100000,
      enableDiscount: "off",
      isPublic: false,
      tags: [
        {
          text: "Tag1",
        },
        {
          text: "Tag2",
        },
        {
          text: "Tag3",
        },
      ],
      medias: [
        {
          id: "4",
          url: "https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/c7/67/a4/c767a40d-f174-fe32-c264-528cd16b5346/source/256x256bb.jpg",
          filename: "256x256bb.jpg",
          filesize: 84612,
          ext: "jpg",
          title: null,
        },
      ],
    },
  }),
  methods: {
    onClick(event) {
      alert(JSON.stringify(event));
    },
  },
  components: {
    NAvatar,
    NBadge,
    NBullet,
    NToggleButton,
    NToggleSwitch,
    NButton,
    NColumn,
    NInput,
    NInputCurrency,
    NInputTag,
    NInputText,
    NSelect,
    NIcon,
    NIconButton,
    NButtonGroup,
    NInputGroup,
    NFileUpload,
    NForm,
    NFormAction,
    NFormSection,
  },
};
</script>
