export default interface configuration {
    "id": number,
    "name": string,
    "for_sale": number,
    "for_rent": number,
    "for_hold": number,
    "locality_id": number,
    "city_id": number,
    "configuration_id": number,
    "property_type_id": number,
    "expected_price_sale": number,
    "expected_price_rent": number,
    "image": string,
    "image_thumb": null,
    "area": null,
    "floor": number,
    "possesion_date": null,
    "bedroom": number,
    "bathroom": number,
    "description": string,
    "quantity": number,
    "created_by": number,
    "buyer_id": null,
    "status": number,
    "step": number,
    "building_id": number,
    "building_towers_id": number,
    "floor_num": number,
    "currency_id": number,
    "parking": number,
    "parking_count": number,
    "parking_for_sale": number,
    "furnished": number,
    "pets": number,
    "floor_plan": string,
    "min_price": number,
    "max_price": number,
    "avg_price": null,
    "external_broker_id": null,
    "is_blocked": number,
    "property_url": string,
    "is_featured": number,
    "half_bathroom": number,
    "kids_friendly": number,
    "students_friendly": number,
    "lgtb_friendly": number,
    "mature_people_friendly": number,
    "is_seller_linked": null,
    "is_property_sold": number,
    "property_price": number,
    "reason": null,
    "view_counter": number,
    "building_configuration_id": number,
    "broker_commision": string,
    "total_commission": number,
    "created_at": string,
    "updated_at": string,
    "lead_properties_count": number,
    "max_area": string,
    "is_favorite": number,
    "building": {
        "id": number,
        "name": "Oliva Residence",
        "starting_price": number,
        "banks": [],
        "is_favorite": number
    },
    "building_configuration": {
        "id": number,
        "building_id": number,
        "name": string,
        "configuration_id": number,
        "floor_map_image": string,
        "carpet_area": null,
        "base_price": null,
        "created_by": null,
        "created_at": string,
        "updated_at": string,
        "config": {
            "id": number,
            "name_en": string,
            "name_es": string,
            "bedroom": number,
            "bathroom": number,
            "half_bathroom": number,
            "created_by": number,
            "status": number,
            "created_at": string,
            "updated_at": string,
            "name": string,
            "is_selected": number
        }
    },
    "configuration": {
        "id": number,
        "name_en": string,
        "name_es": string,
        "bedroom": number,
        "bathroom": number,
        "half_bathroom": number,
        "created_by": number,
        "status": number,
        "created_at": string,
        "updated_at": string,
        "name": string,
        "is_selected": number
    },
    "property_type": {
        "id": number,
        "name_en": string,
        "name_es": string,
        "created_by": number,
        "status": number,
        "created_at": string,
        "updated_at": string,
        "name": string
    },
    "creator": {
        "id": number,
        "name": string,
        "image": string
    },
    "building_towers": {
        "id": number,
        "building_id": number,
        "tower_name": string,
        "num_of_floors": number,
        "possession_status_id": number,
        "launch_date": null,
        "num_of_properties": number,
        "deleted_at": null,
        "updated_at": string,
        "created_at": string,
        "unique_floors": []
    },
    "carpet_areas": [
        {
            "id": number,
            "property_id": number,
            "area": string,
            "price": number,
            "created_at": string,
            "updated_at": string
        }
    ]
}