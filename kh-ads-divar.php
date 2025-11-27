<?php
/*
Plugin Name: WooCommerce Divar Bulk Sample
Description: نمونه افزونه برای ارسال محصولات ووکامرس به دیوار به صورت Bulk (بدون API-Key)
Version: 0.1
Author: Your Name
*/

if (!defined('ABSPATH')) exit;

// اضافه کردن bulk action به لیست محصولات
add_filter('bulk_actions-edit-product', function($bulk_actions){
    $bulk_actions['send_to_divar_sample'] = 'ارسال نمونه به دیوار';
    return $bulk_actions;
});

// اجرای bulk action
add_filter('handle_bulk_actions-edit-product', function($redirect_to, $doaction, $post_ids){
    if ($doaction !== 'send_to_divar_sample') return $redirect_to;

    $log_file = WP_CONTENT_DIR . '/uploads/divar_debug_sample.log';

    foreach ($post_ids as $post_id) {
        $product = wc_get_product($post_id);
        if (!$product) continue;

        $title = $product->get_name();
        $description = $product->get_description();
        $price = $product->get_price();
        $colors = get_post_meta($post_id, 'رنگبندی', true); // نمونه فیلد

        if ($product->is_type('variable')) {
            $variations = $product->get_available_variations();
            foreach ($variations as $variation) {
                $variation_id = $variation['variation_id'];
                $variation_obj = wc_get_product($variation_id);
                $variation_price = $variation_obj->get_price();
                $variation_color = $variation_obj->get_attribute('رنگبندی');

                send_to_divar_sample($title, $description, $variation_price, $variation_color, $log_file);
            }
        } else {
            send_to_divar_sample($title, $description, $price, $colors, $log_file);
        }
    }

    $redirect_to = add_query_arg('bulk_sent', count($post_ids), $redirect_to);
    return $redirect_to;
}, 10, 3);

// تابع نمونه ارسال (بدون اتصال واقعی به API)
function send_to_divar_sample($title, $description, $price, $color, $log_file) {
    // اینجا فقط لاگ ذخیره می‌شود
    $log_entry = date('Y-m-d H:i:s') . " | $title | رنگ: $color | قیمت: $price | ارسال نمونه انجام شد\n";
    file_put_contents($log_file, $log_entry, FILE_APPEND);
}
