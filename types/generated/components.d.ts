import type { Schema, Struct } from '@strapi/strapi';

export interface AssetContentPhoto extends Struct.ComponentSchema {
  collectionName: 'components_asset_content_photos';
  info: {
    displayName: 'Gallery Image';
    icon: 'picture';
  };
  attributes: {
    content_images: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    hotspot_configuration: Schema.Attribute.Component<
      'transform.hotspot-position',
      false
    >;
  };
}

export interface AssetFacilityDetail extends Struct.ComponentSchema {
  collectionName: 'components_asset_facility_details';
  info: {
    displayName: 'Facility Detail';
    icon: 'dashboard';
  };
  attributes: {
    facility_detail: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface AssetNavigation extends Struct.ComponentSchema {
  collectionName: 'components_asset_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'oneWay';
  };
  attributes: {
    building_target: Schema.Attribute.Relation<
      'oneToOne',
      'api::building.building'
    >;
    facility_target: Schema.Attribute.Relation<
      'oneToOne',
      'api::facility.facility'
    >;
    hotspot_configuration: Schema.Attribute.Component<
      'transform.hotspot-position',
      false
    >;
    target_type: Schema.Attribute.Enumeration<
      ['FACILITY', 'BUILDING', 'PANEL_GALLERY', 'PANEL_NAVIGATION']
    >;
  };
}

export interface TransformHotspotPosition extends Struct.ComponentSchema {
  collectionName: 'components_transform_hotspot_positions';
  info: {
    displayName: 'Hotspot Position';
    icon: 'pinMap';
  };
  attributes: {
    coordinate_x: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    coordinate_y: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    hotspot_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    hotspot_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'asset.content-photo': AssetContentPhoto;
      'asset.facility-detail': AssetFacilityDetail;
      'asset.navigation': AssetNavigation;
      'transform.hotspot-position': TransformHotspotPosition;
    }
  }
}
