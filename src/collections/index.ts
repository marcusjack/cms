import GapSizes from "../options/GapSizes";
import HTTPMETHODS from "../options/HTTPMETHODS";
import InputTags from "../options/InputTags";
import SizeOptions from "../options/SizeOptions"

let collections = [
    {
        "name": "configs",
        "label": "Configurations",
        "editor": {
            "preview": false
        },
        "files": [
            {
                "file": "exampleSite/config/_default/config.toml",
                "label": "Site Config",
                "name": "config_toml",
                "fields": [
                    {
                        "label": "Site Title",
                        "name": "title",
                        "widget": "string",
                        "default": "Thriftshop Site",
                        "hint": "Used as *Default* Page Title"
                    },
                    {
                        "label": "Domain URL",
                        "name": "baseURL",
                        "widget": "string",
                        "hint": "type: https://yourdomain.com",
                        "pattern": [
                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                            "ONLY VALID URL ALLOWED!"
                        ]
                    },
                    {
                        "label": "Google Analytics",
                        "name": "googleAnalytics",
                        "widget": "string",
                        "required": false,
                        "hint": "type: UA-{YOUR_ANALYTICS_ID}"
                    },
                    {
                        "label": "Disqus",
                        "name": "disqusShortname",
                        "widget": "string",
                        "required": false,
                        "hint": "type Disqus Shortname"
                    },
                    {
                        "label": "Section Pages Pagination",
                        "name": "paginate",
                        "widget": "string"
                    },
                    {
                        "label": "Language",
                        "name": "languageCode",
                        "widget": "hidden",
                        "default": "en-us"
                    },
                    {
                        "label": "Page Summary Length",
                        "name": "summaryLength",
                        "widget": "number",
                        "default": 10,
                        "value_type": "int",
                        "min": 10,
                        "max": 120,
                        "step": 10
                    },
                    {
                        "label": "Author",
                        "name": "author",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string",
                                "default": "Goldcoders"
                            },
                            {
                                "label": "Avatar",
                                "name": "avatar",
                                "widget": "image",
                                "default": "https://bit.ly/2CYYueR"
                            }
                        ]
                    }
                ]
            },
            {
                "file": "exampleSite/config/_default/menu.toml",
                "label": "Navigation Main & Footer Link",
                "name": "menu_toml",
                "fields": [
                    {
                        "label": "Main Menu Links",
                        "name": "main",
                        "widget": "list",
                        "required": false,
                        "collapsed": true,
                        "label_singular": "Menu Link",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string",
                            },
                            {
                                "label": "URL",
                                "name": "URL",
                                "widget": "string",
                                "hint": "example: /blog/",
                                "pattern": [
                                    "((^\/?[a-z0-9]+(?:-[a-z0-9]+)*\/$)|(^\/?$))",
                                    "Must start and ends with / (forward slash), Only Letters, Numbers and Dash Allowed"
                                ]
                            },
                            {
                                "label": "Priority",
                                "name": "weight",
                                "widget": "number",
                                "default": 0,
                                "value_type": "int",
                                "min": 0,
                                "max": 999,
                                "step": 1,
                                "hint": "higher priority in order if number is smaller"
                            }
                        ]
                    },
                    {
                        "label": "Footer Menu Links",
                        "name": "footer",
                        "required": false,
                        "collapsed": true,
                        "label_singular": "Footer Link",
                        "widget": "list",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string"
                            },
                            {
                                "label": "URL",
                                "name": "URL",
                                "widget": "string",
                                "hint": "example: /blog/",
                                "pattern": [
                                    "((^\/?[a-z0-9]+(?:-[a-z0-9]+)*\/$)|(^\/?$))",
                                    "Must start and ends with / (forward slash)"
                                ]
                            },
                            {
                                "label": "Priority",
                                "name": "weight",
                                "widget": "number",
                                "default": 0,
                                "value_type": "int",
                                "min": 0,
                                "max": 999,
                                "step": 1,
                                "hint": "higher priority in order if number is smaller"
                            }
                        ]
                    }
                ]
            },
            {
                "file": "exampleSite/config/_default/params.toml",
                "label": "Site Branding",
                "name": "params_toml",
                "fields": [
                    {
                        "label": "Brand Logo",
                        "name": "logo",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Brand Logo",
                                "name": "image",
                                "widget": "image",
                                "default": "/images/logo.svg",
                                "required": false,
                                "hint": "This Will Only Be Displayed at Mobile Devices"
                            },
                            {
                                "label": "Image Height",
                                "name": "height",
                                "widget": "select",
                                "options": SizeOptions,
                                "default": 14
                            },
                        ]
                    },
                    {
                        "label": "Brand",
                        "name": "brand",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Enable",
                                "name": "enable",
                                "widget": "boolean",
                                "default": "true",
                                "hint": "Hide or Show Brand Name on Navbar"
                            },
                            {
                                "label": "Fonts",
                                "name": "font",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Brand Name Font",
                                        "name": "name",
                                        "widget": "relation",
                                        "collection": "fonts",
                                        "file": "font_list",
                                        "display_fields": [
                                            "fonts.*.name"
                                        ],
                                        "search_fields": [
                                            "fonts.*.name"
                                        ],
                                        "value_field": "fonts.*.name"
                                    },
                                    {
                                        "label": "Brand Tag Font",
                                        "name": "tag",
                                        "widget": "relation",
                                        "collection": "fonts",
                                        "file": "font_list",
                                        "display_fields": [
                                            "fonts.*.name"
                                        ],
                                        "search_fields": [
                                            "fonts.*.name"
                                        ],
                                        "value_field": "fonts.*.name"
                                    }
                                ]
                            },
                            {
                                "label": "Brand Name",
                                "name": "name",
                                "widget": "string",
                                "default": "Thriftshop",
                                "required": false,
                            },
                            {
                                "label": "Brand Tag",
                                "name": "tag",
                                "widget": "string",
                                "default": "SITE",
                                "required": false,
                            }
                        ]
                    },
                    {
                        "label": "Cover Photo",
                        "name": "cover_photo",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Font",
                                "name": "font",
                                "widget": "relation",
                                "collection": "fonts",
                                "file": "font_list",
                                "display_fields": [
                                    "fonts.*.name"
                                ],
                                "search_fields": [
                                    "fonts.*.name"
                                ],
                                "value_field": "fonts.*.name"
                            },
                            {
                                "label": "Color",
                                "name": "color",
                                "widget": "relation",
                                "collection": "colors",
                                "file": "color_list",
                                "display_fields": [
                                    "colors.*.name"
                                ],
                                "search_fields": [
                                    "colors.*.name"
                                ],
                                "value_field": "colors.*.value"
                            },
                            {
                                "label": "Shade",
                                "name": "shade",
                                "widget": "relation",
                                "collection": "colors",
                                "file": "color_list",
                                "required": false,
                                "default": "",
                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                "display_fields": [
                                    "shades.*.name"
                                ],
                                "search_fields": [
                                    "shades.*.name"
                                ],
                                "value_field": "shades.*.value"
                            }
                        ]
                    },
                    {
                        "label": "Favicon",
                        "name": "favicon",
                        "widget": "image",
                        "hint": "generate favicon here: https://favicon.io/",
                        "default": "/favicon.ico"
                    },
                    {
                        "label": "Site Searchable Sections",
                        "name": "mainSections",
                        "collapsed": true,
                        "label_singular": "searchable",
                        "widget": "select",
                        "hint": "Pages From Section Listed Here is Searchable",
                        "multiple": true,
                        "options": [
                            "blog",
                            "products"
                        ]
                    },
                    {
                        "label": "Copyright",
                        "name": "copyright",
                        "widget": "string",
                        "hint": "add your Copyright or Trademark text."
                    }
                ]
            },
            {
                "file": "exampleSite/data/cart.yaml",
                "label": "Cart Settings",
                "name": "data_cart",
                "fields": [
                    {
                        "label": "Title",
                        "name": "title",
                        "widget": "string",
                        "required": true,
                        "default": "Shopping Cart"
                    },
                    {
                        "label": "Tax",
                        "name": "tax_rate",
                        "widget": "number",
                        "min": 0,
                        "max": 1,
                        "required": true,
                        "value_type": "float",
                        "step": 0.1,
                        "default": 0.1
                    },
                    {
                        "label": "Shipping Fee",
                        "name": "shipping_fee",
                        "widget": "number",
                        "required": true,
                        "min": 0
                    },
                    {
                        "label": "Empty Cart Image",
                        "name": "empty_cart_img",
                        "widget": "image",
                        "required": false
                    },
                    {
                        "label": "Empty Cart Error Message",
                        "name": "empty_cart_error_msg",
                        "widget": "string",
                        "required": true,
                        "default": "Whoops"
                    },
                    {
                        "label": "Empty Cart Label",
                        "name": "empty_cart_label",
                        "widget": "string",
                        "required": true,
                        "default": "Cart is Empty"
                    },

                ]
            },
            {
                "file": "exampleSite/data/social_links.yaml",
                "label": "Social Links",
                "name": "data_social_links",
                "fields": [
                    {
                        "label": "Social Networks",
                        "name": "links",
                        "widget": "list",
                        "required": false,
                        "collapsed": true,
                        "label_singular": "Social Network",
                        "types": [
                            {
                                "label": "Facebook",
                                "name": "facebook",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Link",
                                        "name": "link",
                                        "widget": "string",
                                        "pattern": [
                                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                            "ONLY VALID URL ALLOWED!"
                                        ]
                                    },
                                    {
                                        "label": "Icon",
                                        "name": "icon",
                                        "widget": "image",
                                        "required": false,
                                        "default": "/images/facebook.svg"
                                    }
                                ]
                            },
                            {
                                "label": "Instagram",
                                "name": "instagram",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Link",
                                        "name": "link",
                                        "widget": "string",
                                        "pattern": [
                                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                            "ONLY VALID URL ALLOWED!"
                                        ]
                                    },
                                    {
                                        "label": "Icon",
                                        "name": "icon",
                                        "widget": "image",
                                        "required": false,
                                        "default": "/images/instagram.svg"
                                    }
                                ]
                            },
                            {
                                "label": "Twitter",
                                "name": "twitter",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Link",
                                        "name": "link",
                                        "widget": "string",
                                        "pattern": [
                                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                            "ONLY VALID URL ALLOWED!"
                                        ]
                                    },
                                    {
                                        "label": "Icon",
                                        "name": "icon",
                                        "widget": "image",
                                        "required": false,
                                        "default": "/images/twitter.svg"
                                    }
                                ]
                            },
                            {
                                "label": "Github",
                                "name": "github",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Link",
                                        "name": "link",
                                        "widget": "string",
                                        "pattern": [
                                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                            "ONLY VALID URL ALLOWED!"
                                        ]
                                    },
                                    {
                                        "label": "Icon",
                                        "name": "icon",
                                        "widget": "image",
                                        "required": false,
                                        "default": "/images/github.svg"
                                    }
                                ]
                            },
                            {
                                "label": "Youtube",
                                "name": "youtube",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Link",
                                        "name": "link",
                                        "widget": "string",
                                        "pattern": [
                                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                            "ONLY VALID URL ALLOWED!"
                                        ]
                                    },
                                    {
                                        "label": "Icon",
                                        "name": "icon",
                                        "widget": "image",
                                        "required": false,
                                        "default": "/images/youtube.svg"
                                    }
                                ]
                            },
                            {
                                "label": "LinkedIn",
                                "name": "linkedin",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Link",
                                        "name": "link",
                                        "widget": "string",
                                        "pattern": [
                                            "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                            "ONLY VALID URL ALLOWED!"
                                        ]
                                    },
                                    {
                                        "label": "Icon",
                                        "name": "icon",
                                        "widget": "image",
                                        "required": false,
                                        "default": "/images/linkedin.svg"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "sections",
        "label": "Site Sections",
        "editor": {
            "preview": false
        },
        "files": [
            {
                "file": "exampleSite/content/blog/_index.md",
                "label": "Blog Post Listing Page",
                "name": "section_blog",
                "fields": [
                    {
                        "label": "Index",
                        "name": "index",
                        "widget": "hidden",
                        "default": true
                    },
                    {
                        "label": "Data",
                        "name": "data",
                        "widget": "hidden",
                        "default": {}
                    },
                    {
                        "label": "Unpublish Page",
                        "name": "draft",
                        "widget": "boolean",
                        "default": false,
                        "hint": "To Hide This Page, Set to True"
                    },
                    {
                        "label": "Show Cart",
                        "name": "showcart",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Search",
                        "name": "showsearch",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Pagination",
                        "name": "showpagination",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Title",
                        "name": "title",
                        "widget": "string"
                    },
                    {
                        "label": "Description",
                        "name": "description",
                        "widget": "text"
                    },
                    {
                        "label": "Featured Image",
                        "name": "featured_image",
                        "widget": "image",
                        "required": false
                    }
                ]
            },
            {
                "file": "exampleSite/content/products/_index.md",
                "label": "Product Listing Page",
                "name": "section_products",
                "fields": [
                    {
                        "label": "Index",
                        "name": "index",
                        "widget": "hidden",
                        "default": true
                    },
                    {
                        "label": "Data",
                        "name": "data",
                        "widget": "hidden",
                        "default": {}
                    },
                    {
                        "label": "Unpubish Page",
                        "name": "draft",
                        "widget": "boolean",
                        "default": false,
                        "hint": "To Hide This Page, Set to True"
                    },
                    {
                        "label": "Show Cart",
                        "name": "showcart",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Search",
                        "name": "showsearch",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Pagination",
                        "name": "showpagination",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Title",
                        "name": "title",
                        "widget": "string"
                    },
                    {
                        "label": "Description",
                        "name": "description",
                        "widget": "text"
                    },
                    {
                        "label": "Featured Image",
                        "name": "featured_image",
                        "widget": "image",
                        "required": false
                    }
                ]
            },
            {
                "file": "exampleSite/content/faq/_index.md",
                "label": "FAQ Listing Page",
                "name": "section_faqs",
                "preview_path": "/faq",
                "fields": [
                    {
                        "label": "Index",
                        "name": "index",
                        "widget": "hidden",
                        "default": true
                    },
                    {
                        "label": "Publish This  Page",
                        "name": "draft",
                        "widget": "boolean",
                        "default": false,
                        "hint": "To Hide This Page, Set to True"
                    },
                    {
                        "label": "Show Cart",
                        "name": "showcart",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Search",
                        "name": "showsearch",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Title",
                        "name": "title",
                        "widget": "string"
                    },
                    {
                        "label": "Slug",
                        "name": "slug",
                        "widget": "string",
                        "required": false,
                        "hint": "Default Value Will Be The Title When Leave Blank",
                        "pattern": [
                            "^[a-z0-9](-?[a-z0-9])*$",
                            "Small Letters, Numbers and Dash(-) ONLY"
                        ]
                    },
                    {
                        "label": "Description",
                        "name": "description",
                        "widget": "text"
                    },
                    {
                        "label": "Featured Image",
                        "name": "featured_image",
                        "widget": "image",
                        "required": false
                    },
                    {
                        "label": "Content",
                        "name": "body",
                        "widget": "markdown"
                    }
                ]
            },
            {
                "file": "exampleSite/content/contact/_index.md",
                "label": "Contact Page",
                "name": "section_contact",
                "fields": [
                    {
                        "label": "Index",
                        "name": "index",
                        "widget": "hidden",
                        "default": true
                    },
                    {
                        "label": "Data",
                        "name": "data",
                        "widget": "hidden"
                    },
                    {
                        "label": "Unpublish Page",
                        "name": "draft",
                        "widget": "boolean",
                        "default": false,
                        "hint": "To Hide This Page, Set to True"
                    },
                    {
                        "label": "Show Cart",
                        "name": "showcart",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Search",
                        "name": "showsearch",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Title",
                        "name": "title",
                        "widget": "string"
                    },
                    {
                        "label": "Description",
                        "name": "description",
                        "widget": "text"
                    },
                    {
                        "label": "Featured Image",
                        "name": "featured_image",
                        "widget": "image",
                        "required": false
                    },
                    {
                        "label": "Cover Photo",
                        "name": "cover_photo",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Font",
                                "name": "font",
                                "widget": "relation",
                                "collection": "fonts",
                                "file": "font_list",
                                "display_fields": [
                                    "fonts.*.name"
                                ],
                                "search_fields": [
                                    "fonts.*.name"
                                ],
                                "value_field": "fonts.*.name"
                            },
                            {
                                "label": "Color",
                                "name": "color",
                                "widget": "relation",
                                "collection": "colors",
                                "file": "color_list",
                                "display_fields": [
                                    "colors.*.name"
                                ],
                                "search_fields": [
                                    "colors.*.name"
                                ],
                                "value_field": "colors.*.value"
                            },
                            {
                                "label": "Shade",
                                "name": "shade",
                                "widget": "relation",
                                "collection": "colors",
                                "file": "color_list",
                                "required": false,
                                "default": "",
                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                "display_fields": [
                                    "shades.*.name"
                                ],
                                "search_fields": [
                                    "shades.*.name"
                                ],
                                "value_field": "shades.*.value"
                            }
                        ]
                    },
                    {
                        "label": "Form",
                        "name": "form",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Action",
                                "name": "action",
                                "widget": "string",
                                "hint": "Form URL from Any Services Such as Mailchimp, Google Forms, Aweber Etc.",
                                "required": false,
                                "default": "#",
                                "pattern": [
                                    "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                    "ONLY VALID URL ALLOWED!"
                                ]
                            },
                            {
                                "label": "Method",
                                "name": "method",
                                "widget": "select",
                                "options": HTTPMETHODS
                            },
                            {
                                "label": "Form Submit",
                                "name": "button",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Button Text",
                                        "name": "text",
                                        "widget": "string",
                                        "default": "Submit"
                                    }
                                ]
                            },
                            {
                                "label": "Google Recaptcha V2",
                                "name": "recaptcha",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Enable",
                                        "name": "enable",
                                        "widget": "boolean",
                                        "default": false
                                    },
                                    {
                                        "label": "Site Key ID",
                                        "name": "siteKey",
                                        "widget": "string",
                                        "required": false
                                    }
                                ]
                            },
                            {
                                "label": "Agreement Section",
                                "name": "agreement",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Show Agreement",
                                        "name": "enable",
                                        "widget": "boolean",
                                        "defaut": false
                                    },
                                    {
                                        "label": "Agreement Text",
                                        "name": "text",
                                        "widget": "string",
                                        "default": "I have read and Agreed to"
                                    },
                                    {
                                        "label": "Policy Links",
                                        "name": "links",
                                        "required": false,
                                        "collapsed": true,
                                        "label_singular": "Policy Link",
                                        "widget": "list",
                                        "allow_add": true,
                                        "fields": [
                                            {
                                                "label": "Policy Name",
                                                "name": "name"
                                            },
                                            {
                                                "label": "Link",
                                                "name": "link"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Form Fields",
                                "name": "fields",
                                "widget": "list",
                                "required": false,
                                "collapsed": true,
                                "label_singular": "Form Field",
                                "summary": "{{fields.value}}",
                                "types": [
                                    {
                                        "label": "Text",
                                        "name": "text",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Label",
                                                "name": "label",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Placeholder",
                                                "name": "placeholder",
                                                "widget": "string",
                                                "required": false
                                            },
                                            {
                                                "label": "Value",
                                                "name": "value",
                                                "hint": "field name that will be used on the form",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "hint": "Same with Value , Except when Using Google Form, it Uses entry.[1234] format",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "HTML TAG",
                                                "name": "tag",
                                                "widget": "select",
                                                "options": InputTags,
                                                "default": "input"
                                            },
                                            {
                                                "label": "Validation",
                                                "name": "validation",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Required",
                                                        "name": "required",
                                                        "widget": "boolean",
                                                        "default": true
                                                    },
                                                    {
                                                        "label": "Regex Pattern For Validation",
                                                        "name": "pattern",
                                                        "widget": "string",
                                                        "required": false,
                                                        "default": ""
                                                    },
                                                    {
                                                        "label": "Validation Error Message for Pattern",
                                                        "name": "title",
                                                        "widget": "string",
                                                        "required": false,
                                                        "default": ""
                                                    },
                                                    {
                                                        "label": "Min Length",
                                                        "name": "minLength",
                                                        "hint": "Useful if you wanna limit no of characters In a Field",
                                                        "widget": "number",
                                                        "required": false
                                                    },
                                                    {
                                                        "label": "Max Length",
                                                        "name": "maxLength",
                                                        "hint": "Useful if you wanna limit no of characters In a Field",
                                                        "widget": "number",
                                                        "required": false
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Email",
                                        "name": "email",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Label",
                                                "name": "label",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Placeholder",
                                                "name": "placeholder",
                                                "widget": "string",
                                                "required": false
                                            },
                                            {
                                                "label": "Value",
                                                "name": "value",
                                                "hint": "field name that will be used on the form",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "hint": "Same with Value , Except when Using Google Form, it Uses entry.[1234] format",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "HTML TAG",
                                                "name": "tag",
                                                "widget": "select",
                                                "options": InputTags,
                                                "default": "input"
                                            },
                                            {
                                                "label": "Validation",
                                                "name": "validation",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Required",
                                                        "name": "required",
                                                        "widget": "boolean",
                                                        "default": true
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "Pick Up Locations Sections",
                        "name": "pick_up_locations",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Pick Up Location Section Title",
                                "name": "title",
                                "widget": "string",
                                "required": false
                            },
                            {
                                "label": "Pick Up Location List",
                                "name": "locations",
                                "required": false,
                                "collapsed": true,
                                "label_singular": "Location",
                                "widget": "list",
                                "fields": [
                                    {
                                        "label": "Title",
                                        "name": "title",
                                        "widget": "string",
                                        "default": ""
                                    },
                                    {
                                        "label": "Address Line 1",
                                        "name": "address_1",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Address Line 2",
                                        "name": "address_2",
                                        "required": false,
                                        "default": ""
                                    },
                                    {
                                        "label": "City",
                                        "name": "city",
                                        "widget": "string"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "label": "Mobile Phones Section",
                        "name": "mobiles",
                        "widget": "object",
                        "fields": [
                            {
                                "label": "Contact Numbers Section Title",
                                "name": "title",
                                "widget": "string",
                                "required": false,
                                "default": ""
                            },
                            {
                                "label": "Contact No. List",
                                "name": "mobiles",
                                "required": false,
                                "collapsed": true,
                                "label_singular": "Contact No",
                                "widget": "list",
                                "fields": [
                                    {
                                        "label": "Name",
                                        "name": "name",
                                        "hint": "Use Network Name or Type of Number ie. Home / Office / Contact",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Contact No",
                                        "hint": "Telephone Number or Mobile Number",
                                        "name": "mobile",
                                        "widget": "string"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "file": "exampleSite/content/legalities/_index.md",
                "label": "Legalities Page",
                "name": "section_legalities",
                "fields": [
                    {
                        "label": "Index",
                        "name": "index",
                        "widget": "hidden",
                        "default": true
                    },
                    {
                        "label": "Data",
                        "name": "data",
                        "widget": "hidden",
                        "default": {}
                    },
                    {
                        "label": "Unpubish Page",
                        "name": "draft",
                        "widget": "boolean",
                        "default": false,
                        "hint": "To Hide This Page, Set to True"
                    },
                    {
                        "label": "Show Cart",
                        "name": "showcart",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Show Search",
                        "name": "showsearch",
                        "widget": "boolean",
                        "default": true
                    },
                    {
                        "label": "Title",
                        "name": "title",
                        "widget": "string"
                    },
                    {
                        "label": "Description",
                        "name": "description",
                        "widget": "text"
                    },
                    {
                        "label": "Featured Image",
                        "name": "featured_image",
                        "widget": "image",
                        "required": false
                    }
                ]
            }
        ]
    },
    {
        "name": "fonts",
        "label": "Site Fonts",
        "hide": true,
        "files": [
            {
                "file": "exampleSite/data/fonts.yaml",
                "label": "Font List",
                "name": "font_list",
                "fields": [
                    {
                        "label": "Font List",
                        "name": "fonts",
                        "widget": "list",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string",
                                "pattern": [
                                    "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                    "Letters, Numbers and Dash(-) ONLY"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "colors",
        "label": "Site Colors",
        "hide": true,
        "files": [
            {
                "file": "exampleSite/data/colorpicker.yaml",
                "label": "Color & Shade",
                "name": "color_list",
                "fields": [
                    {
                        "label": "Colors",
                        "name": "colors",
                        "widget": "list",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string",
                                "pattern": [
                                    "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                    "Letters, Numbers and Dash(-) ONLY"
                                ]
                            },
                            {
                                "label": "Value",
                                "name": "value",
                                "widget": "string",
                                "pattern": [
                                    "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                    "Letters, Numbers and Dash(-) ONLY"
                                ]
                            }
                        ]
                    },
                    {
                        "label": "Shades",
                        "name": "shades",
                        "widget": "list",
                        "default": [
                            "50",
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "taxonomies",
        "label": "Taxonomies",
        "editor": {
            "preview": false
        },
        "files": [
            {
                "file": "exampleSite/data/tags.yaml",
                "label": "Tag List",
                "name": "tag_list",
                "fields": [
                    {
                        "label": "Tag List",
                        "name": "tags",
                        "widget": "list",
                        "required": false,
                        "collapsed": true,
                        "label_singular": "Tag",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string",
                                "pattern": [
                                    "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                    "Letters, Numbers and Dash(-) ONLY"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "file": "exampleSite/data/categories.yaml",
                "label": "Category List",
                "name": "category_list",
                "fields": [
                    {
                        "label": "Category List",
                        "name": "categories",
                        "required": false,
                        "collapsed": true,
                        "label_singular": "Category",
                        "widget": "list",
                        "fields": [
                            {
                                "label": "Name",
                                "name": "name",
                                "widget": "string",
                                "pattern": [
                                    "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                                    "Letters, Numbers and Dash(-) ONLY"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "home_contents",
        "identifier_field": "title",
        "label": "Custom Home Contents",
        "label_singular": "Content Section",
        "folder": "exampleSite/content/home/contents",
        "filter": {
            "field": "index",
            "value": false
        },
        "sortable_fields": [
            "title"
        ],
        "summary": "{{fields.title}}",
        "create": true,
        "editor": {
            "preview": false
        },
        "fields": [
            {
                "label": "Index",
                "name": "index",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Title",
                "name": "title",
                "widget": "string"
            },
            {
                "label": "Content",
                "name": "body",
                "widget": "markdown",
                "hint": "We Can Use this Content Inside Landing Page Builder."
            }
        ]
    },
    {
        "name": "home_page",
        "label": "Home Page Builder",
        "editor": {
            "preview": false
        },
        "files": [
            {
                "file": "exampleSite/content/_index.md",
                "label": "Build Homepage Section By Section",
                "name": "home_index",
                "fields": [
                    {
                        "label": "Home Sections",
                        "name": "sections",
                        "widget": "list",
                        "label_singular": "Template",
                        "types": [
                            {
                                "label": "Dynamic Home Content",
                                "name": "content_centered",
                                "widget": "object",
                                "summary": "Dynamic Content / Centered: {{fields.title}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/content/centered.html"
                                    },
                                    {
                                        "label": "Intro",
                                        "name": "intro",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Summary",
                                        "name": "summary",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Home Content Section",
                                        "name": "filename",
                                        "widget": "relation",
                                        "hint": "Content Used Here Is From Home Contents. Be Sure to Create Content There So You Can Use it Here!",
                                        "collection": "home_contents",
                                        "display_fields": [
                                            "title"
                                        ],
                                        "search_fields": [
                                            "title"
                                        ],
                                        "value_field": "home/contents/{{slug}}"
                                    }
                                ]
                            },
                            {
                                "label": "Hero Simple Centered",
                                "name": "hero_simple_centered",
                                "widget": "object",
                                "summary": "Hero/Simple Centered: {{fields.header}} {{fields.tag}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string",
                                        "default": "Best Product"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string",
                                        "default": "of the year"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/hero/simple-centered.html"
                                    },
                                    {
                                        "label": "Left Button",
                                        "name": "left",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Show",
                                                "name": "show",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Buy Now"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Right Button",
                                        "name": "right",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Show",
                                                "name": "show",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Learn More"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Hero Split Image",
                                "name": "hero_split_image",
                                "widget": "object",
                                "summary": "Hero/Split Image: {{fields.header}} {{fields.tag}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string",
                                        "default": "The Best Product"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string",
                                        "default": "of the year 2020"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                                    },
                                    {
                                        "label": "Image",
                                        "name": "image",
                                        "widget": "image",
                                        "default": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/hero/split-image.html"
                                    },
                                    {
                                        "label": "Left Button",
                                        "name": "left",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Show",
                                                "name": "show",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Buy Now"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Right Button",
                                        "name": "right",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Show",
                                                "name": "show",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Learn More"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Hero Angled Image on Right",
                                "name": "hero_angled_image_on_right",
                                "widget": "object",
                                "summary": "Hero/Angled Image on Right: {{fields.header}} {{fields.tag}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string",
                                        "default": "The Best Product"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string",
                                        "default": "of the year 2020"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                                    },
                                    {
                                        "label": "Image",
                                        "name": "image",
                                        "widget": "image",
                                        "default": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/hero/angled-image-on-right.html"
                                    },
                                    {
                                        "label": "Left Button",
                                        "name": "left",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Show",
                                                "name": "show",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Buy Now"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Right Button",
                                        "name": "right",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Show",
                                                "name": "show",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Learn More"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Hero App with Screenshot",
                                "name": "hero_app_with_screenshot",
                                "widget": "object",
                                "summary": "Hero/App with Screenshot: {{fields.header}} {{fields.tag}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string",
                                        "default": "The Best Product"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string",
                                        "default": "of the Year 2020"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                                    },
                                    {
                                        "label": "Backgroud Upper Half",
                                        "name": "bgupper",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Backgroud Lower Half",
                                        "name": "bglower",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "800",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Featured",
                                        "name": "featured",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Image",
                                                "name": "url",
                                                "widget": "image",
                                                "default": "https://images.unsplash.com/photo-1518527399940-f3f768f47dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                                            },
                                            {
                                                "label": "Image Alt",
                                                "name": "alt",
                                                "widget": "string",
                                                "default": "Screenshot"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Video",
                                        "name": "video",
                                        "widget": "object",
                                        "required": false,
                                        "hint": "To Show Video On Image When Clicked Fill This Up.",
                                        "fields": [
                                            {
                                                "label": "Youtube ID",
                                                "name": "id",
                                                "widget": "string",
                                                "default": "wf4F2-9UXUo"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/hero/app-with-screenshot.html"
                                    },
                                    {
                                        "label": "Subheader",
                                        "name": "subheader",
                                        "widget": "string",
                                        "required": false,
                                        "default": "MY AWESOME CLIENTS"
                                    },
                                    {
                                        "label": "Logos",
                                        "name": "logos",
                                        "widget": "object",
                                        "required": false,
                                        "fields": [
                                            {
                                                "label": "Enable",
                                                "name": "enable",
                                                "widget": "boolean",
                                                "default": true
                                            },
                                            {
                                                "label": "Column Gaps",
                                                "name": "gaps",
                                                "widget": "select",
                                                "options": GapSizes,
                                                "default": "8"
                                            },
                                            {
                                                "label": "Column on Desktop",
                                                "name": "colLG",
                                                "widget": "number",
                                                "default": 6
                                            },
                                            {
                                                "label": "Column on Tablets",
                                                "name": "colMD",
                                                "widget": "number",
                                                "default": 6
                                            },
                                            {
                                                "label": "Column on Mobile",
                                                "name": "col",
                                                "widget": "number",
                                                "default": 2
                                            },
                                            {
                                                "label": "Images",
                                                "name": "images",
                                                "widget": "list",
                                                "default": [],
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "url",
                                                        "widget": "image",
                                                        "default": "images/statickit-logo.svg"
                                                    },
                                                    {
                                                        "label": "Image ALT",
                                                        "name": "alt",
                                                        "widget": "string",
                                                        "default": "logo item"
                                                    },
                                                    {
                                                        "label": "Desktop Span",
                                                        "name": "spanLG",
                                                        "widget": "number",
                                                        "default": 1
                                                    },
                                                    {
                                                        "label": "Tablet Span",
                                                        "name": "spanMD",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Mobile Span",
                                                        "name": "span",
                                                        "widget": "number",
                                                        "default": 1
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Hero With Sign Up and Video",
                                "name": "hero_with_sign_up_and_video",
                                "widget": "object",
                                "summary": "Hero/With SignUp and Video: {{fields.header}} {{fields.tag}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string",
                                        "default": "The Best Product"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string",
                                        "default": "of the Year 2020"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt."
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/hero/with-signup-and-video.html"
                                    },
                                    {
                                        "label": "Sign Up",
                                        "name": "mail",
                                        "widget": "object",
                                        "required": true,
                                        "fields": [
                                            {
                                                "label": "Enable",
                                                "name": "enable",
                                                "widget": "boolean",
                                                "required": false,
                                                "default": true
                                            },
                                            {
                                                "label": "Action",
                                                "name": "action",
                                                "widget": "string",
                                                "required": false,
                                                "default": "#",
                                                "pattern": [
                                                    "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                    "ONLY VALID URL ALLOWED!"
                                                ]
                                            },
                                            {
                                                "label": "Method",
                                                "name": "method",
                                                "widget": "string",
                                                "default": "POST"
                                            },
                                            {
                                                "label": "Placeholder",
                                                "name": "placeholder",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Enter Your Best Email."
                                            },
                                            {
                                                "label": "Hint",
                                                "name": "hint",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Sign up to get notified when it???s ready."
                                            },
                                            {
                                                "label": "Button Text",
                                                "name": "txt",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Notify Me"
                                            },
                                            {
                                                "label": "Privacy URL",
                                                "name": "privacy",
                                                "widget": "string",
                                                "required": false,
                                                "default": "/privacy"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Button",
                                        "name": "btn",
                                        "widget": "object",
                                        "required": true,
                                        "fields": [
                                            {
                                                "label": "Enable",
                                                "name": "enable",
                                                "widget": "boolean",
                                                "required": false,
                                                "default": true
                                            },
                                            {
                                                "label": "Image",
                                                "name": "img",
                                                "widget": "image",
                                                "required": false,
                                                "default": "images/seo.svg"
                                            },
                                            {
                                                "label": "Link",
                                                "name": "link",
                                                "widget": "string",
                                                "default": "#"
                                            },
                                            {
                                                "label": "Title",
                                                "name": "title",
                                                "widget": "string",
                                                "default": "Learn More"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Video",
                                        "name": "video",
                                        "widget": "object",
                                        "required": false,
                                        "fields": [
                                            {
                                                "label": "Video Image",
                                                "name": "img",
                                                "widget": "image",
                                                "default": "https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                            },
                                            {
                                                "label": "Youtube ID",
                                                "name": "id",
                                                "widget": "string",
                                                "default": "wf4F2-9UXUo"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Featured Sections Centered 2x2 Grid",
                                "name": "featured_centered_2x2",
                                "widget": "object",
                                "summary": "Featured/Centered 2x2: {{fields.header}} {{fields.tag}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/features/centered-2x2.html"
                                    },
                                    {
                                        "label": "Features",
                                        "name": "features",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Title",
                                                "name": "title",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Description",
                                                "name": "description",
                                                "widget": "text"
                                            },
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Featured Sections Split Image",
                                "name": "featured_split_image",
                                "widget": "object",
                                "summary": "Featured/Split Image: {{fields.header}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/features/split-image.html"
                                    },
                                    {
                                        "label": "Heading",
                                        "name": "heading",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Subheading",
                                        "name": "subheading",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Split Image",
                                        "name": "image",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Position",
                                                "name": "position",
                                                "widget": "select",
                                                "options": ["left", "right"],
                                                "default": "left",
                                                "required": false,
                                            },
                                            {
                                                "label": "Split Image",
                                                "name": "url",
                                                "widget": "image"
                                            },
                                        ]
                                    },
                                    {
                                        "label": "Title",
                                        "name": "title",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Intro",
                                        "name": "intro",
                                        "widget": "text"
                                    },
                                    {
                                        "label": "Features",
                                        "name": "features",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Feature",
                                                "name": "title",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Description",
                                                "name": "description",
                                                "widget": "text"
                                            },
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Featured Sections Offset 2x2 Grid",
                                "name": "featured_2x2_grid",
                                "widget": "object",
                                "summary": "Featured/Offset 2x2 Grid: {{fields.header}}",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/features/offset-2x2-grid.html"
                                    },
                                    {
                                        "label": "Features",
                                        "name": "features",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Title",
                                                "name": "title",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Description",
                                                "name": "description",
                                                "widget": "text"
                                            },
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Featured Sections Three Column",
                                "name": "featured_3_col",
                                "widget": "object",
                                "summary": "Featured/Simple 3 Col",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/features/simple-3-column.html"
                                    },
                                    {
                                        "label": "Features",
                                        "name": "features",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Title",
                                                "name": "title",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Description",
                                                "name": "description",
                                                "widget": "text"
                                            },
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "CTA Simple Centered",
                                "name": "cta_simple_centered",
                                "widget": "object",
                                "summary": "CTA/Simple Centered",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/cta/simple-centered.html"
                                    },
                                    {
                                        "label": "CTA Button",
                                        "name": "cta",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "CTA Simple Justifed",
                                "name": "cta_simple_justified",
                                "widget": "object",
                                "summary": "CTA/Simple Justified",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/cta/simple-justified.html"
                                    },
                                    {
                                        "label": "CTA Button",
                                        "name": "cta",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "CTA Simple Stacked",
                                "name": "cta_simple_stacked",
                                "widget": "object",
                                "summary": "CTA/Simple Stacked",
                                "fields": [
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/cta/simple-stacked.html"
                                    },
                                    {
                                        "label": "CTA Button",
                                        "name": "cta",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "CTA Spit with Image",
                                "name": "cta_simple_split_with_image",
                                "widget": "object",
                                "summary": "CTA/Split With Image: {{fields.header.name}}",
                                "fields": [
                                    {
                                        "label": "Background Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Text Color",
                                        "name": "text",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Title",
                                                "name": "name",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Text Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Text Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Tag",
                                        "name": "tag",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Title",
                                                "name": "name",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Text Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Text Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text"
                                    },
                                    {
                                        "label": "Left Side Image",
                                        "name": "image",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Image",
                                                "name": "url",
                                                "widget": "image"
                                            },
                                            {
                                                "label": "Image Alt",
                                                "name": "alt",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Height",
                                                "name": "height",
                                                "widget": "select",
                                                "options": SizeOptions,
                                                "default": 24
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/cta/split-with-image.html"
                                    },
                                    {
                                        "label": "CTA Button",
                                        "name": "cta",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Icon",
                                                "name": "icon",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "image",
                                                        "widget": "image",
                                                        "required": false,
                                                        "default": "images/tuple-logo.svg"
                                                    },
                                                    {
                                                        "label": "Image Alt",
                                                        "name": "alt",
                                                        "default": "Action Button",
                                                        "required": false,
                                                        "widget": "string"
                                                    },
                                                    {
                                                        "label": "Image Height",
                                                        "name": "height",
                                                        "widget": "select",
                                                        "options": SizeOptions,
                                                        "required": false,
                                                        "default": 12
                                                    }
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Testimonials Simple Centered",
                                "name": "testimonials_simple_centered",
                                "widget": "object",
                                "summary": "Testimonial/Simple Centered: {{fields.header}}",
                                "fields": [
                                    {
                                        "label": "Testimonial",
                                        "name": "testimonial",
                                        "widget": "string",
                                        "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis"
                                    },
                                    {
                                        "label": "User Company Logo",
                                        "name": "image",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/tuple-logo.svg"
                                            },
                                            {
                                                "label": "Image Alt",
                                                "name": "alt",
                                                "default": "Company Logo",
                                                "widget": "string"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/testimonials/simple-centered.html"
                                    },
                                    {
                                        "label": "User",
                                        "name": "user",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string",
                                                "default": "Juan Dela Cruz"
                                            },
                                            {
                                                "label": "Company/Work",
                                                "name": "company",
                                                "widget": "string",
                                                "default": "Chief Technical Officer"
                                            },
                                            {
                                                "label": "Profile Photo",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/avatar.svg"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Testimonials Side by  Side",
                                "name": "testimonials_side_by_side",
                                "widget": "object",
                                "summary": "Testimonial/Side By Side",
                                "fields": [
                                    {
                                        "label": "Background Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "800",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/testimonials/side-by-side.html"
                                    },
                                    {
                                        "label": "Left User Testimonial",
                                        "name": "left_testimonial",
                                        "widget": "string",
                                        "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                                    },
                                    {
                                        "label": "Left Company Logo",
                                        "name": "left_image",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/tuple-logo.svg"
                                            },
                                            {
                                                "label": "Image Alt",
                                                "name": "alt",
                                                "default": "Company Logo",
                                                "widget": "string"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Left User Info",
                                        "name": "left_user",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string",
                                                "default": "Juan Dela Cruz"
                                            },
                                            {
                                                "label": "Company/Work",
                                                "name": "company",
                                                "widget": "string",
                                                "default": "CEO/Founder"
                                            },
                                            {
                                                "label": "Profile Photo",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/avatar.svg"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Right User Testimonial",
                                        "name": "right_testimonial",
                                        "widget": "string",
                                        "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                                    },
                                    {
                                        "label": "Right Company Logo",
                                        "name": "right_image",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Image",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/mirage-logo.svg"
                                            },
                                            {
                                                "label": "Image Alt",
                                                "name": "alt",
                                                "default": "Company Logo",
                                                "widget": "string"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Right User Info",
                                        "name": "right_user",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string",
                                                "default": "Juan Dela Cruz"
                                            },
                                            {
                                                "label": "Company/Work",
                                                "name": "company",
                                                "widgetBackground": "string",
                                                "default": "CEO/Founder"
                                            },
                                            {
                                                "label": "Profile Photo",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/avatar.svg"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Testimonials With Large Avatar",
                                "name": "testimonial_with_avatar",
                                "widget": "object",
                                "summary": "Testimonial/With Large Avatar",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/testimonials/with-large-avatar.html"
                                    },
                                    {
                                        "label": "Large Avatar Position",
                                        "name": "position",
                                        "widget": "select",
                                        "options": [
                                            "left",
                                            "right"
                                        ],
                                        "default": "left"
                                    },
                                    {
                                        "label": "Testimonial",
                                        "name": "testimonial",
                                        "widget": "string",
                                        "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
                                    },
                                    {
                                        "label": "User",
                                        "name": "user",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string",
                                                "default": "Juan Dela Cruz"
                                            },
                                            {
                                                "label": "Company/Work",
                                                "name": "company",
                                                "widget": "string",
                                                "default": "CEO - My Company"
                                            },
                                            {
                                                "label": "Profile Photo",
                                                "name": "image",
                                                "widget": "image",
                                                "default": "images/avatar.svg"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Team Section",
                                "name": "team_dark",
                                "widget": "object",
                                "summary": "Team Section: {{fields.title}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/teams/section.html"
                                    },
                                    {
                                        "label": "Title",
                                        "name": "title",
                                        "widget": "string",
                                        "default": "Meet Our Team"
                                    },
                                    {
                                        "label": "Subtitle",
                                        "name": "subtitle",
                                        "widget": "string",
                                        "default": "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque."
                                    },
                                    {
                                        "label": "Background Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Card Background Color",
                                        "name": "card_bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Name Text Color",
                                        "name": "name_text",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Title Text Color",
                                        "name": "title_text",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Text Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Text Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Role Text Color",
                                        "name": "role_text",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Text Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Text Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Team Members",
                                        "name": "members",
                                        "required": false,
                                        "collapsed": true,
                                        "label_singular": "Member",
                                        "widget": "list",
                                        "summary": "{{fields.name}}",
                                        "fields": [
                                            {
                                                "label": "Full Name",
                                                "name": "name",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Juan Dela Cruz"
                                            },
                                            {
                                                "label": "Role",
                                                "name": "role",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Name",
                                                        "name": "name",
                                                        "widget": "string"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Profile Picture",
                                                "name": "image",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "url",
                                                        "widget": "image"
                                                    },
                                                    {
                                                        "label": "Alt",
                                                        "name": "name",
                                                        "widget": "string",
                                                        "required": false,
                                                        "default": "Team Member"
                                                    },
                                                ]
                                            },
                                            {
                                                "label": "Social Networks",
                                                "name": "links",
                                                "widget": "list",
                                                "required": false,
                                                "collapsed": true,
                                                "label_singular": "Social Network",
                                                "types": [
                                                    {
                                                        "label": "Facebook",
                                                        "name": "facebook",
                                                        "widget": "object",
                                                        "fields": [
                                                            {
                                                                "label": "Link",
                                                                "name": "link",
                                                                "widget": "string",
                                                                "pattern": [
                                                                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                                                    "ONLY VALID URL ALLOWED!"
                                                                ]
                                                            },
                                                            {
                                                                "label": "Icon",
                                                                "name": "icon",
                                                                "widget": "image",
                                                                "required": false,
                                                                "default": "/images/facebook.svg"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "Instagram",
                                                        "name": "instagram",
                                                        "widget": "object",
                                                        "fields": [
                                                            {
                                                                "label": "Link",
                                                                "name": "link",
                                                                "widget": "string",
                                                                "pattern": [
                                                                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                                                    "ONLY VALID URL ALLOWED!"
                                                                ]
                                                            },
                                                            {
                                                                "label": "Icon",
                                                                "name": "icon",
                                                                "widget": "image",
                                                                "required": false,
                                                                "default": "/images/instagram.svg"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "Twitter",
                                                        "name": "twitter",
                                                        "widget": "object",
                                                        "fields": [
                                                            {
                                                                "label": "Link",
                                                                "name": "link",
                                                                "widget": "string",
                                                                "pattern": [
                                                                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                                                    "ONLY VALID URL ALLOWED!"
                                                                ]
                                                            },
                                                            {
                                                                "label": "Icon",
                                                                "name": "icon",
                                                                "widget": "image",
                                                                "required": false,
                                                                "default": "/images/twitter.svg"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "Github",
                                                        "name": "github",
                                                        "widget": "object",
                                                        "fields": [
                                                            {
                                                                "label": "Link",
                                                                "name": "link",
                                                                "widget": "string",
                                                                "pattern": [
                                                                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                                                    "ONLY VALID URL ALLOWED!"
                                                                ]
                                                            },
                                                            {
                                                                "label": "Icon",
                                                                "name": "icon",
                                                                "widget": "image",
                                                                "required": false,
                                                                "default": "/images/github.svg"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "Youtube",
                                                        "name": "youtube",
                                                        "widget": "object",
                                                        "fields": [
                                                            {
                                                                "label": "Link",
                                                                "name": "link",
                                                                "widget": "string",
                                                                "pattern": [
                                                                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                                                    "ONLY VALID URL ALLOWED!"
                                                                ]
                                                            },
                                                            {
                                                                "label": "Icon",
                                                                "name": "icon",
                                                                "widget": "image",
                                                                "required": false,
                                                                "default": "/images/youtube.svg"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "label": "LinkedIn",
                                                        "name": "linkedin",
                                                        "widget": "object",
                                                        "fields": [
                                                            {
                                                                "label": "Link",
                                                                "name": "link",
                                                                "widget": "string",
                                                                "pattern": [
                                                                    "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                                                    "ONLY VALID URL ALLOWED!"
                                                                ]
                                                            },
                                                            {
                                                                "label": "Icon",
                                                                "name": "icon",
                                                                "widget": "image",
                                                                "required": false,
                                                                "default": "/images/linkedin.svg"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Newsletter Simple Stacked",
                                "name": "newsletter_simple_stacked",
                                "widget": "object",
                                "summary": "Newsletter/Simple Stacked",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/newsletter/simple-stacked.html"
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Subheader",
                                        "name": "subheader",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Newsletter Form",
                                        "name": "form",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Method",
                                                "name": "method",
                                                "widget": "select",
                                                "options": [
                                                    "GET",
                                                    "POST",
                                                    "PUT",
                                                    "DELETE"
                                                ],
                                                "default": "POST"
                                            },
                                            {
                                                "label": "Action",
                                                "name": "action",
                                                "widget": "string",
                                                "required": false,
                                                "default": "#",
                                                "pattern": [
                                                    "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                    "ONLY VALID URL ALLOWED!"
                                                ]
                                            },
                                            {
                                                "label": "Placeholder",
                                                "name": "placeholder",
                                                "widget": "string",
                                                "default": "Enter Your Email"
                                            },
                                            {
                                                "label": "Submit Button Text",
                                                "name": "submit",
                                                "widget": "string",
                                                "default": "Notify Me"
                                            },
                                            {
                                                "label": "Button Color",
                                                "name": "bg",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Color",
                                                        "name": "color",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "display_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "value_field": "colors.*.value"
                                                    },
                                                    {
                                                        "label": "Shade",
                                                        "name": "shade",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "required": false,
                                                        "default": "",
                                                        "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                        "display_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "value_field": "shades.*.value"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Newsletter On Card",
                                "name": "newsletter_on_card",
                                "widget": "object",
                                "summary": "Newsletter/On Card",
                                "fields": [
                                    {
                                        "label": "Background Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/newsletter/on-brand-card.html"
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text"
                                    },
                                    {
                                        "label": "Newsletter Form",
                                        "name": "form",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Method",
                                                "name": "method",
                                                "widget": "select",
                                                "options": [
                                                    "GET",
                                                    "POST",
                                                    "PUT",
                                                    "DELETE"
                                                ],
                                                "default": "POST"
                                            },
                                            {
                                                "label": "Action",
                                                "name": "action",
                                                "widget": "string",
                                                "required": false,
                                                "default": "#",
                                                "pattern": [
                                                    "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                    "ONLY VALID URL ALLOWED!"
                                                ]
                                            },
                                            {
                                                "label": "Placeholder",
                                                "name": "placeholder",
                                                "widget": "string",
                                                "default": "Enter Your Email"
                                            },
                                            {
                                                "label": "Submit Button Text",
                                                "name": "submit",
                                                "widget": "string",
                                                "default": "Notify Me"
                                            },
                                            {
                                                "label": "Button Color",
                                                "name": "bg",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Color",
                                                        "name": "color",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "display_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "value_field": "colors.*.value"
                                                    },
                                                    {
                                                        "label": "Shade",
                                                        "name": "shade",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "required": false,
                                                        "default": "",
                                                        "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                        "display_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "value_field": "shades.*.value"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Privacy Section",
                                        "name": "privacy",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Explain Policy",
                                                "name": "explain",
                                                "widget": "string",
                                                "default": "We care about the protection of your data. Read our"
                                            },
                                            {
                                                "label": "Policy URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "/privacy"
                                            },
                                            {
                                                "label": "Policy Name",
                                                "name": "policy",
                                                "widget": "string",
                                                "default": "Privacy Policy"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Newsletter Custom Background",
                                "name": "newsletter_custom_bg",
                                "widget": "object",
                                "summary": "Newsletter/Custom Background Color",
                                "fields": [
                                    {
                                        "label": "Background Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/newsletter/custom-bg.html"
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text"
                                    },
                                    {
                                        "label": "Newsletter Form",
                                        "name": "form",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Method",
                                                "name": "method",
                                                "widget": "select",
                                                "options": [
                                                    "GET",
                                                    "POST",
                                                    "PUT",
                                                    "DELETE"
                                                ],
                                                "default": "POST"
                                            },
                                            {
                                                "label": "Action",
                                                "name": "action",
                                                "widget": "string",
                                                "required": false,
                                                "default": "#",
                                                "pattern": [
                                                    "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                    "ONLY VALID URL ALLOWED!"
                                                ]
                                            },
                                            {
                                                "label": "Placeholder",
                                                "name": "placeholder",
                                                "widget": "string",
                                                "default": "Enter Your Email"
                                            },
                                            {
                                                "label": "Submit Button Text",
                                                "name": "submit",
                                                "widget": "string",
                                                "default": "Notify Me"
                                            },
                                            {
                                                "label": "Button Color",
                                                "name": "bg",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Color",
                                                        "name": "color",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "display_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "value_field": "colors.*.value"
                                                    },
                                                    {
                                                        "label": "Shade",
                                                        "name": "shade",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "required": false,
                                                        "default": "",
                                                        "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                        "display_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "value_field": "shades.*.value"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Privacy Section",
                                        "name": "privacy",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Explain Policy",
                                                "name": "explain",
                                                "widget": "string",
                                                "default": "We care about the protection of your data. Read our"
                                            },
                                            {
                                                "label": "Policy URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "/privacy"
                                            },
                                            {
                                                "label": "Policy Name",
                                                "name": "policy",
                                                "widget": "string",
                                                "default": "Privacy Policy"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Logos With Header Centered",
                                "name": "logos_with_header",
                                "widget": "object",
                                "summary": "Logos/With Header: {{fields.header}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/logos/with-header.html"
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Backgroud Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Logo Background Color",
                                        "name": "logobg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "blue"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Logos",
                                        "name": "logos",
                                        "widget": "object",
                                        "required": false,
                                        "fields": [
                                            {
                                                "label": "Column Gaps",
                                                "name": "gaps",
                                                "widget": "select",
                                                "options": GapSizes,
                                                "default": "0.5"
                                            },
                                            {
                                                "label": "Column on Desktop",
                                                "name": "colLG",
                                                "widget": "number",
                                                "default": 6
                                            },
                                            {
                                                "label": "Column on Tablets",
                                                "name": "colMD",
                                                "widget": "number",
                                                "default": 6
                                            },
                                            {
                                                "label": "Column on Mobile",
                                                "name": "col",
                                                "widget": "number",
                                                "default": 2
                                            },
                                            {
                                                "label": "Image Height",
                                                "name": "height",
                                                "widget": "number",
                                                "default": 12
                                            },
                                            {
                                                "label": "Images",
                                                "name": "images",
                                                "widget": "list",
                                                "hint": "Upload 6 Images If You Dont Want to Configure Span and Column",
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "url",
                                                        "widget": "image"
                                                    },
                                                    {
                                                        "label": "Image ALT",
                                                        "name": "alt",
                                                        "widget": "string",
                                                        "default": "logo item"
                                                    },
                                                    {
                                                        "label": "Desktop Span",
                                                        "name": "spanLG",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Tablet Span",
                                                        "name": "spanMD",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Mobile Span",
                                                        "name": "span",
                                                        "widget": "number",
                                                        "default": 1
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Logos Simple",
                                "name": "logos_simple",
                                "widget": "object",
                                "summary": "Logos/Simple",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/logos/simple.html"
                                    },
                                    {
                                        "label": "Backgroud Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Logos",
                                        "name": "logos",
                                        "widget": "object",
                                        "required": false,
                                        "fields": [
                                            {
                                                "label": "Column Gaps",
                                                "name": "gaps",
                                                "widget": "select",
                                                "options": GapSizes,
                                                "default": "8"
                                            },
                                            {
                                                "label": "Column on Desktop",
                                                "name": "colLG",
                                                "widget": "number",
                                                "default": 6
                                            },
                                            {
                                                "label": "Column on Tablets",
                                                "name": "colMD",
                                                "widget": "number",
                                                "default": 6
                                            },
                                            {
                                                "label": "Column on Mobile",
                                                "name": "col",
                                                "widget": "number",
                                                "default": 2
                                            },
                                            {
                                                "label": "Image Height",
                                                "name": "height",
                                                "widget": "number",
                                                "default": 12
                                            },
                                            {
                                                "label": "Images",
                                                "name": "images",
                                                "widget": "list",
                                                "hint": "Upload 6 Images If You Dont Want to Configure Span and Column",
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "url",
                                                        "widget": "image"
                                                    },
                                                    {
                                                        "label": "Image ALT",
                                                        "name": "alt",
                                                        "widget": "string",
                                                        "default": "logo item"
                                                    },
                                                    {
                                                        "label": "Desktop Span",
                                                        "name": "spanLG",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Tablet Span",
                                                        "name": "spanMD",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Mobile Span",
                                                        "name": "span",
                                                        "widget": "number",
                                                        "default": 1
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Logos Split Grid",
                                "name": "logos_split_grid",
                                "widget": "object",
                                "summary": "Logos/Split Grid: {{fields.position}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/logos/split-grid.html"
                                    },
                                    {
                                        "label": "Position",
                                        "name": "position",
                                        "widget": "select",
                                        "options": [
                                            "right",
                                            "left"
                                        ],
                                        "hint": "Logos Position in Grid"
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text"
                                    },
                                    {
                                        "label": "Backgroud Color",
                                        "name": "bg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Logo Background Color",
                                        "name": "logobg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "blue"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "CTA Buttons",
                                        "name": "buttons",
                                        "widget": "list",
                                        "fields": [
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Text",
                                                "name": "cta",
                                                "widget": "string",
                                                "default": "Click Here"
                                            },
                                            {
                                                "label": "Background Color",
                                                "name": "bg",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Color",
                                                        "name": "color",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "display_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "value_field": "colors.*.value",
                                                        "default": "primary-darker"
                                                    },
                                                    {
                                                        "label": "Shade",
                                                        "name": "shade",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "required": false,
                                                        "default": "",
                                                        "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                        "display_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "value_field": "shades.*.value"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Text Color",
                                                "name": "text",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Color",
                                                        "name": "color",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "display_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "value_field": "colors.*.value",
                                                        "default": "white"
                                                    },
                                                    {
                                                        "label": "Shade",
                                                        "name": "shade",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "required": false,
                                                        "default": "",
                                                        "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                        "display_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "value_field": "shades.*.value"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Logos",
                                        "name": "logos",
                                        "widget": "object",
                                        "required": false,
                                        "fields": [
                                            {
                                                "label": "Column Gaps",
                                                "name": "gaps",
                                                "widget": "select",
                                                "options": GapSizes,
                                                "default": "0.5"
                                            },
                                            {
                                                "label": "Column on Desktop",
                                                "name": "colLG",
                                                "widget": "number",
                                                "default": 6,
                                                "required": false
                                            },
                                            {
                                                "label": "Column on Tablets",
                                                "name": "colMD",
                                                "widget": "number",
                                                "default": 6,
                                                "required": false
                                            },
                                            {
                                                "label": "Column on Mobile",
                                                "name": "col",
                                                "widget": "number",
                                                "default": 2,
                                                "required": false
                                            },
                                            {
                                                "label": "Image Height",
                                                "name": "height",
                                                "widget": "select",
                                                "options": SizeOptions,
                                                "default": 24
                                            },
                                            {
                                                "label": "Images",
                                                "name": "images",
                                                "widget": "list",
                                                "hint": "Upload 6 Images If You Dont Want to Configure Span and Column",
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "url",
                                                        "widget": "image"
                                                    },
                                                    {
                                                        "label": "Image ALT",
                                                        "name": "alt",
                                                        "widget": "string",
                                                        "default": "logo item"
                                                    },
                                                    {
                                                        "label": "Desktop Span",
                                                        "name": "spanLG",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Tablet Span",
                                                        "name": "spanMD",
                                                        "widget": "number",
                                                        "default": 2
                                                    },
                                                    {
                                                        "label": "Mobile Span",
                                                        "name": "span",
                                                        "widget": "number",
                                                        "default": 1
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Pricing Single",
                                "name": "pricing_single",
                                "widget": "object",
                                "summary": "Pricing/Single: {{fields.title}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/pricing/single.html"
                                    },
                                    {
                                        "label": "Title",
                                        "name": "title",
                                        "widget": "string",
                                        "default": "Simple no-tricks pricing"
                                    },
                                    {
                                        "label": "Subtitle",
                                        "name": "subtitle",
                                        "widget": "string",
                                        "default": "If you're not satisfied, contact us within the first 14 days and we'll send you a full refund."
                                    },
                                    {
                                        "label": "Header",
                                        "name": "header",
                                        "widget": "string",
                                        "default": "Lifetime Membership"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
                                    },
                                    {
                                        "label": "Upper Background Color",
                                        "name": "upperbg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Lower Background Color",
                                        "name": "lowerbg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "white"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Inclusion Text",
                                        "name": "inclusion",
                                        "widget": "string",
                                        "default": "WHAT'S INCLUDED"
                                    },
                                    {
                                        "label": "Inclusion List",
                                        "name": "list",
                                        "widget": "list",
                                        "field": {
                                            "label": "Included",
                                            "name": "text",
                                            "widget": "string"
                                        },
                                        "default": [
                                            "Private forum access",
                                            "Member resources",
                                            "Entry to annual conference",
                                            "Official member t-shirt"
                                        ]
                                    },
                                    {
                                        "label": "Pricing",
                                        "name": "price",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Tag",
                                                "name": "tag",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Pay Once Use it Forever"
                                            },
                                            {
                                                "label": "Amount",
                                                "name": "amount",
                                                "widget": "number",
                                                "default": "349"
                                            },
                                            {
                                                "label": "Currency Symbol",
                                                "name": "currency",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Symbol",
                                                        "name": "symbol",
                                                        "widget": "string",
                                                        "default": "???"
                                                    },
                                                    {
                                                        "label": "Name",
                                                        "name": "name",
                                                        "widget": "string",
                                                        "default": "PHP"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "CTA Buttons",
                                        "name": "cta",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            },
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "default": "Get Access"
                                            },
                                            {
                                                "label": "Button Color",
                                                "name": "bg",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Color",
                                                        "name": "color",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "display_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "colors.*.name"
                                                        ],
                                                        "value_field": "colors.*.value",
                                                        "default": "primary-darker"
                                                    },
                                                    {
                                                        "label": "Shade",
                                                        "name": "shade",
                                                        "widget": "relation",
                                                        "collection": "colors",
                                                        "file": "color_list",
                                                        "required": false,
                                                        "default": "",
                                                        "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                        "display_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "search_fields": [
                                                            "shades.*.name"
                                                        ],
                                                        "value_field": "shades.*.value"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Policy",
                                        "name": "policy",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Message",
                                                "name": "message",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Learn about our membership policy"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Downloadables",
                                        "name": "file",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Text",
                                                "name": "text",
                                                "widget": "string",
                                                "required": false,
                                                "default": "Get a Free Sample"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "file",
                                                "required": false,
                                                "default": "#"
                                            },
                                            {
                                                "label": "Download Size",
                                                "name": "size",
                                                "widget": "string",
                                                "required": false,
                                                "default": "20 MB"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Pricing Three Tier",
                                "name": "pricing_three_tier",
                                "widget": "object",
                                "summary": "Pricing/Three Tier: {{fields.title}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/pricing/three-tier.html"
                                    },
                                    {
                                        "label": "Brand Title",
                                        "name": "brand_title",
                                        "widget": "string",
                                        "default": "PRICING"
                                    },
                                    {
                                        "label": "Title",
                                        "name": "title",
                                        "widget": "string",
                                        "default": "The right price for you, whoever you are"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
                                    },
                                    {
                                        "label": "Upper Background Color",
                                        "name": "upperbg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "900",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Lower Background Color",
                                        "name": "lowerbg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Featured Color",
                                        "name": "featured",
                                        "widget": "object",
                                        "hint": "Featured Tier is Tier #2,It is At the Centered Highlighted",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "brand"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Tiers",
                                        "name": "tiers",
                                        "widget": "list",
                                        "hint": "NOTE: Only the First 3 Tier Will Be Rendered, Tier #2 is The Featured Tier",
                                        "fields": [
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Currency",
                                                "name": "currency",
                                                "widget": "string",
                                                "default": "???"
                                            },
                                            {
                                                "label": "Amount",
                                                "name": "amount",
                                                "widget": "number",
                                                "default": "349"
                                            },
                                            {
                                                "label": "Per",
                                                "name": "per_unit",
                                                "widget": "string",
                                                "default": "month"
                                            },
                                            {
                                                "label": "CTA Buttons",
                                                "name": "button",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "URL",
                                                        "name": "url",
                                                        "widget": "string",
                                                        "default": "#"
                                                    },
                                                    {
                                                        "label": "Text",
                                                        "name": "cta",
                                                        "widget": "string",
                                                        "default": "Start Your Trial"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Features",
                                                "name": "features",
                                                "widget": "list",
                                                "field": {
                                                    "label": "Feature",
                                                    "name": "feature",
                                                    "widget": "string"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Pricing Two Tier",
                                "name": "pricing_two_tier",
                                "widget": "object",
                                "summary": "Pricing/Two Tier: {{fields.title}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/pricing/two-tier.html"
                                    },
                                    {
                                        "label": "Brand Title",
                                        "name": "brand_title",
                                        "widget": "string",
                                        "default": "PRICING"
                                    },
                                    {
                                        "label": "Title",
                                        "name": "title",
                                        "widget": "string",
                                        "default": "The right price for you, whoever you are"
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "default": "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
                                    },
                                    {
                                        "label": "Upper Background Color",
                                        "name": "upperbg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "900",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Lower Background Color",
                                        "name": "lowerbg",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "gray"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "50",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Featured Color",
                                        "name": "featured",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "Color",
                                                "name": "color",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "display_fields": [
                                                    "colors.*.name"
                                                ],
                                                "search_fields": [
                                                    "colors.*.name"
                                                ],
                                                "value_field": "colors.*.value",
                                                "default": "brand"
                                            },
                                            {
                                                "label": "Shade",
                                                "name": "shade",
                                                "widget": "relation",
                                                "collection": "colors",
                                                "file": "color_list",
                                                "required": false,
                                                "default": "",
                                                "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                "display_fields": [
                                                    "shades.*.name"
                                                ],
                                                "search_fields": [
                                                    "shades.*.name"
                                                ],
                                                "value_field": "shades.*.value"
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Tiers",
                                        "name": "tiers",
                                        "widget": "list",
                                        "hint": "NOTE: Only the First 2 Tier Will Be Rendered",
                                        "fields": [
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string"
                                            },
                                            {
                                                "label": "Currency",
                                                "name": "currency",
                                                "widget": "string",
                                                "default": "???"
                                            },
                                            {
                                                "label": "Amount",
                                                "name": "amount",
                                                "widget": "number",
                                                "default": "349"
                                            },
                                            {
                                                "label": "Per",
                                                "name": "per_unit",
                                                "widget": "string",
                                                "default": "mo"
                                            },
                                            {
                                                "label": "Description",
                                                "name": "description",
                                                "widget": "text"
                                            },
                                            {
                                                "label": "CTA Buttons",
                                                "name": "button",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "URL",
                                                        "name": "url",
                                                        "widget": "string",
                                                        "default": "#"
                                                    },
                                                    {
                                                        "label": "Text",
                                                        "name": "cta",
                                                        "widget": "string",
                                                        "default": "Get Started"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Features",
                                                "name": "features",
                                                "widget": "list",
                                                "field": {
                                                    "label": "Feature",
                                                    "name": "feature",
                                                    "widget": "string"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "label": "Extra Tier",
                                        "name": "extra",
                                        "widget": "object",
                                        "fields": [
                                            {
                                                "label": "title",
                                                "name": "title",
                                                "widget": "string",
                                                "default": "DISCOUNTED"
                                            },
                                            {
                                                "label": "description",
                                                "name": "description",
                                                "widget": "string",
                                                "default": "Get full access to all of standard license features for solo projects that make less than $20k gross revenue for"
                                            },
                                            {
                                                "label": "Price",
                                                "name": "amount",
                                                "widget": "number",
                                                "default": "499"
                                            },
                                            {
                                                "label": "Currency",
                                                "name": "currency",
                                                "widget": "string",
                                                "default": "???"
                                            },
                                            {
                                                "label": "Call To Action",
                                                "name": "cta",
                                                "widget": "string",
                                                "default": "Buy Discounted License"
                                            },
                                            {
                                                "label": "URL",
                                                "name": "url",
                                                "widget": "string",
                                                "default": "#"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "label": "Contact Cards",
                                "name": "contacts_cards",
                                "widget": "object",
                                "summary": "Contact/Cards: {{fields.title}}",
                                "fields": [
                                    {
                                        "label": "Template",
                                        "name": "template",
                                        "widget": "hidden",
                                        "default": "templates/contacts/cards.html"
                                    },
                                    {
                                        "label": "Team Name",
                                        "name": "title",
                                        "widget": "string",
                                        "hint": "Group name or Team Name",
                                        "required": false
                                    },
                                    {
                                        "label": "Description",
                                        "name": "description",
                                        "widget": "text",
                                        "hint": "Give Brief Intro , Describing These Group",
                                        "required": false
                                    },
                                    {
                                        "label": "Column Gaps",
                                        "name": "gap",
                                        "widget": "select",
                                        "options": GapSizes,
                                        "default": "8"
                                    },
                                    {
                                        "label": "Column on Desktop",
                                        "name": "colLG",
                                        "widget": "number",
                                        "default": 6
                                    },
                                    {
                                        "label": "Column on Tablets",
                                        "name": "colMD",
                                        "widget": "number",
                                        "default": 6
                                    },
                                    {
                                        "label": "Column on Mobile",
                                        "name": "col",
                                        "widget": "number",
                                        "default": 2
                                    },
                                    {
                                        "label": "Contacts",
                                        "name": "contacts",
                                        "widget": "list",
                                        "summary": "{{fields.name}}",
                                        "hint": "Default Settings is Perfect for 3 Contact, You can Customize Column and Span if You Have More or Less Contacts",
                                        "fields": [
                                            {
                                                "label": "Avatar",
                                                "name": "image",
                                                "widget": "object",
                                                "fields": [
                                                    {
                                                        "label": "Image",
                                                        "name": "url",
                                                        "widget": "image",
                                                        "default": "/images/avatar.svg"
                                                    },
                                                    {
                                                        "label": "Image Alt",
                                                        "name": "alt",
                                                        "widget": "string",
                                                        "default": "contact"
                                                    }
                                                ]
                                            },
                                            {
                                                "label": "Name",
                                                "name": "name",
                                                "widget": "string",
                                                "default": "Juan Dela Cruz"
                                            },
                                            {
                                                "label": "Work",
                                                "name": "work",
                                                "widget": "string",
                                                "default": "Chief Technical Officer"
                                            },
                                            {
                                                "label": "Role",
                                                "name": "role",
                                                "widget": "string",
                                                "default": "admin"
                                            },
                                            {
                                                "label": "Email",
                                                "name": "email",
                                                "widget": "string",
                                                "default": "juandelacruz@gmail.com"
                                            },
                                            {
                                                "label": "Mobile No",
                                                "name": "mobile",
                                                "widget": "string",
                                                "default": "+6391912345678"
                                            },
                                            {
                                                "label": "Desktop Span",
                                                "name": "spanLG",
                                                "widget": "number",
                                                "default": 2
                                            },
                                            {
                                                "label": "Tablet Span",
                                                "name": "spanMD",
                                                "widget": "number",
                                                "default": 2
                                            },
                                            {
                                                "label": "Mobile Span",
                                                "name": "span",
                                                "widget": "number",
                                                "default": 1
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "blog",
        "identifier_field": "title",
        "label": "Blog",
        "label_singular": "Post",
        "folder": "exampleSite/content/blog",
        "filter": {
            "field": "index",
            "value": false
        },
        "path": "{{slug}}/index",
        "create": true,
        "media_folder": "resources",
        "public_folder": "blog/{{slug}}/resources",
        "preview_path": "blog/{{fields.slug}}",
        "editor": {
            "preview": false
        },
        "fields": [
            {
                "label": "Index",
                "name": "index",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Data",
                "name": "data",
                "widget": "hidden",
                "default": {}
            },
            {
                "label": "Publish Date",
                "name": "date",
                "widget": "datetime"
            },
            {
                "label": "Draft",
                "name": "draft",
                "widget": "boolean",
                "default": false
            },
            {
                "label": "Show Cart",
                "name": "showcart",
                "widget": "boolean",
                "default": true
            },
            {
                "label": "Show Search",
                "name": "showsearch",
                "widget": "boolean",
                "default": true
            },
            {
                "label": "Title",
                "name": "title",
                "widget": "string"
            },
            {
                "label": "Slug",
                "name": "slug",
                "widget": "string",
                "required": false,
                "hint": "Default Value Will Be The Title When Leave Blank",
                "pattern": [
                    "^[a-z0-9](-?[a-z0-9])*$",
                    "Small Letters, Numbers and Dash(-) ONLY"
                ]
            },
            {
                "label": "Description",
                "name": "description",
                "widget": "text"
            },
            {
                "label": "Featured Image",
                "name": "featured_image",
                "widget": "image",
                "hint": "Note: When Page Title is Changed Remove Image and Choose Image Again."
            },
            {
                "label": "tags",
                "name": "tags",
                "widget": "relation",
                "required": false,
                "collection": "taxonomies",
                "file": "tag_list",
                "multiple": true,
                "display_fields": [
                    "tags.*.name"
                ],
                "search_fields": [
                    "tags.*.name"
                ],
                "value_field": "tags.*.name"
            },
            {
                "label": "categories",
                "name": "categories",
                "widget": "relation",
                "required": false,
                "collection": "taxonomies",
                "file": "category_list",
                "display_fields": [
                    "categories.*.name"
                ],
                "search_fields": [
                    "categories.*.name"
                ],
                "value_field": "categories.*.name"
            },
            {
                "label": "Resources",
                "name": "resources",
                "collapsed": true,
                "label_singular": "Image",
                "widget": "list",
                "required": false,
                "hint": "Note: When Page Title is Changed Remove Image and Choose Image Again.",
                "fields": [
                    {
                        "label": "Image",
                        "name": "src",
                        "widget": "image"
                    },
                    {
                        "label": "Name",
                        "name": "name",
                        "widget": "string",
                        "hint": "Any Unique Key For This Blog Post Resources",
                        "pattern": [
                            "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                            "Letters, Numbers and Dash Only"
                        ]
                    }
                ]
            },
            {
                "label": "Content",
                "name": "body",
                "widget": "markdown"
            }
        ]
    },
    {
        "name": "products",
        "identifier_field": "title",
        "label": "Products",
        "label_singular": "Product",
        "folder": "exampleSite/content/products",
        "filter": {
            "field": "index",
            "value": false
        },
        "create": true,
        "editor": {
            "preview": false
        },
        "fields": [
            {
                "label": "Index",
                "name": "index",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Data",
                "name": "data",
                "widget": "string",
                "default": {},
                "hint": "Useful for Creating Product Options"
            },
            {
                "label": "Publish Date",
                "name": "date",
                "widget": "datetime"
            },
            {
                "label": "Draft",
                "name": "draft",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Show Cart",
                "name": "showcart",
                "widget": "hidden",
                "default": true
            },
            {
                "label": "Show Search",
                "name": "showsearch",
                "widget": "hidden",
                "default": true
            },
            {
                "label": "Show Review",
                "name": "showreview",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Product ID",
                "name": "product_id",
                "widget": "string",
                "hint": "Must Be Unique amount Products",
                "pattern": [
                    "^[A-Za-z0-9]+$",
                    "No Spaces and Special Characters"
                ]
            },
            {
                "label": "Price Before",
                "name": "price_before",
                "widget": "string",
                "required": false,
                "hint": "This is Optional",
                "pattern": [
                    "[0-9]*\\.[0-9][0-9]",
                    "Numbers with at least 2 Decimal places"
                ]
            },
            {
                "label": "Base Price",
                "name": "price",
                "widget": "string",
                "hint": "Currency in PHP",
                "pattern": [
                    "[0-9]*\\.[0-9][0-9]",
                    "Numbers with at least 2 Decimal places"
                ]
            },
            {
                "label": "Title",
                "name": "title",
                "widget": "string"
            },
            {
                "label": "Slug",
                "name": "slug",
                "widget": "string",
                "required": false,
                "hint": "Default Value Will Be The Title When Leave Blank",
                "pattern": [
                    "^[a-z0-9](-?[a-z0-9])*$",
                    "Small Letters, Numbers and Dash(-) ONLY"
                ]
            },
            {
                "label": "Description",
                "name": "description",
                "widget": "text"
            },
            {
                "label": "Featured Image",
                "name": "featured_image",
                "widget": "image",
                "hint": "Note: When Page Title is Changed Remove Image and Choose Image Again."
            },
            {
                "label": "Product Options",
                "name": "options",
                "widget": "list",
                "label_singular": "Option",
                "types": [
                    {
                        "label": "Base Model Images",
                        "name": "options_base",
                        "widget": "object",
                        "summary": "Size: {{fields.name}}",
                        "fields": [
                            {
                                "label": "Option Name",
                                "name": "name",
                                "widget": "hidden",
                                "default": "base_model",
                            },
                            {
                                "label": "Image",
                                "name": "image",
                                "widget": "image",
                                "required": false,
                                "hint": "Note: Image Upload Here Will Be Shown In Carousel"
                            },
                        ]
                    },
                    {
                        "label": "Color Options",
                        "name": "options_color",
                        "widget": "object",
                        "summary": "Color: {{fields.name}}",
                        "fields": [
                            {
                                "label": "Option Name",
                                "name": "name",
                                "widget": "string",
                                "hint": "Note: Will Be Used Instead of Product Title e.g.: White Lebron 17 Shoes"
                            },
                            {
                                "label": "Default Option",
                                "name": "default",
                                "widget": "boolean",
                                "required": false,
                                "default": false,
                                "hint": "This Will Be The Default Options For This Type",
                            },
                            {
                                "label": "Pick A Color",
                                "name": "color",
                                "widget": "color",
                                "picker": "sketch",
                            },
                            {
                                "label": "Change Based Price?",
                                "name": "change",
                                "widget": "select",
                                "default": "no",
                                "required": false,
                                "options": ["add", "subtract", "no"]
                            },
                            {
                                "label": "Amount",
                                "name": "amount",
                                "widget": "string",
                                "required": false,
                                "hint": "The Amount To Add or Subtract From Base Price",
                                "pattern": [
                                    "[0-9]*\\.[0-9][0-9]",
                                    "Numbers with at least 2 Decimal places"
                                ]
                            },
                            {
                                "label": "Image",
                                "name": "image",
                                "widget": "image",
                                "required": false,
                                "hint": "Note: Image Upload Here Will Be Shown In Carousel"
                            },
                        ]
                    },
                    {
                        "label": "Size Options",
                        "name": "options_size",
                        "widget": "object",
                        "summary": "Size: {{fields.name}}",
                        "fields": [
                            {
                                "label": "Size Name",
                                "name": "name",
                                "widget": "string",
                                "hint": "e.g.: Small , or 7 inch",
                            },
                            {
                                "label": "Default Option",
                                "name": "default",
                                "widget": "boolean",
                                "required": false,
                                "default": false,
                                "hint": "This Will Be The Default Options For This Type",
                            },
                            {
                                "label": "Change Based Price",
                                "name": "change",
                                "widget": "select",
                                "default": "no",
                                "required": false,
                                "options": ["add", "subtract", "no"]
                            },
                            {
                                "label": "Amount",
                                "name": "amount",
                                "widget": "string",
                                "required": false,
                                "hint": "The Amount To Add or Subtract From Base Price",
                                "pattern": [
                                    "[0-9]*\\.[0-9][0-9]",
                                    "Numbers with at least 2 Decimal places"
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                "label": "Content",
                "name": "body",
                "widget": "markdown"
            }
        ]
    },
    {
        "name": "faqs",
        "identifier_field": "title",
        "label": "FAQS",
        "label_singular": "FAQ",
        "folder": "exampleSite/content/faq",
        "filter": {
            "field": "index",
            "value": false
        },
        "sortable_fields": [
            "order"
        ],
        "summary": "{{fields.order}} {{fields.title}}",
        "preview_path": "/faq",
        "create": true,
        "editor": {
            "preview": false
        },
        "fields": [
            {
                "label": "Index",
                "name": "index",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Order",
                "name": "order",
                "widget": "number",
                "default": 0,
                "hint": "Order Of FAQ is ascending highest priority is 0"
            },
            {
                "label": "Question",
                "name": "title",
                "widget": "string"
            },
            {
                "label": "Answer",
                "name": "body",
                "widget": "markdown"
            }
        ]
    },
    {
        "name": "legalities",
        "label": "Legalities",
        "editor": {
            "preview": false
        },
        "files": [
            {
                "file": "exampleSite/data/legalities.yaml",
                "label": "Configure Legalities Content",
                "name": "legalities",
                "fields": [
                    {
                        "label": "Business Name",
                        "name": "business_name",
                        "widget": "string"
                    },
                    {
                        "label": "Cover Photo",
                        "name": "cover_photo",
                        "widget": "image"
                    },
                    {
                        "label": "Owner's Name",
                        "name": "owner",
                        "widget": "string"
                    },
                    {
                        "label": "Business Line",
                        "name": "business_line",
                        "widget": "string"
                    },
                    {
                        "label": "Busines Address",
                        "name": "business_address",
                        "widget": "string"
                    },
                    {
                        "label": "Certificates",
                        "name": "certificates",
                        "required": false,
                        "collapsed": true,
                        "label_singular": "Certificate",
                        "widget": "list",
                        "summary": "{{fields.name}}",
                        "types": [
                            {
                                "label": "External Link",
                                "name": "link",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Certificate Name",
                                        "name": "name",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "External URL",
                                        "name": "url",
                                        "widget": "string"
                                    }
                                ]
                            },
                            {
                                "label": "Image Upload",
                                "name": "image",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Certificate Name",
                                        "name": "name",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "Image",
                                        "name": "url",
                                        "widget": "image"
                                    }
                                ]
                            },
                            {
                                "label": "File Upload",
                                "name": "file",
                                "widget": "object",
                                "fields": [
                                    {
                                        "label": "Certificate Name",
                                        "name": "name",
                                        "widget": "string"
                                    },
                                    {
                                        "label": "File",
                                        "name": "url",
                                        "widget": "file"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "pages",
        "identifier_field": "title",
        "label": "Pages",
        "label_singular": "Page",
        "folder": "exampleSite/content/pages",
        "filter": {
            "field": "index",
            "value": false
        },
        "create": true,
        "preview_path": "{{fields.slug}}",
        "editor": {
            "preview": false
        },
        "fields": [
            {
                "label": "Index",
                "name": "index",
                "widget": "hidden",
                "default": false
            },
            {
                "label": "Draft",
                "name": "draft",
                "widget": "boolean",
                "default": false
            },
            {
                "label": "Publish Date",
                "name": "date",
                "widget": "datetime"
            },
            {
                "label": "Show Cart",
                "name": "showcart",
                "widget": "boolean",
                "default": true
            },
            {
                "label": "Show Search",
                "name": "showsearch",
                "widget": "boolean",
                "default": true
            },
            {
                "label": "Title",
                "name": "title",
                "widget": "string"
            },
            {
                "label": "Slug",
                "name": "slug",
                "widget": "string",
                "required": false,
                "hint": "Default Value Will Be The Title When Leave Blank",
                "pattern": [
                    "^[a-z0-9](-?[a-z0-9])*$",
                    "Small Letters, Numbers and Dash(-) ONLY"
                ]
            },
            {
                "label": "Description",
                "name": "description",
                "widget": "text"
            },
            {
                "label": "Featured Image",
                "name": "featured_image",
                "widget": "image",
                "hint": "Note: When Page Title is Changed Remove Image and Choose Image Again."
            },
            {
                "label": "Keywords",
                "name": "keywords",
                "widget": "list",
                "required": false,
                "summary": "{{fields.keyword}}",
                "field": {
                    "label": "Keyword",
                    "name": "keyword",
                    "widget": "string"
                }
            },
            {
                "label": "Images",
                "name": "images",
                "widget": "list",
                "required": false,
                "collapsed": true,
                "label_singular": "Image",
                "field": {
                    "label": "Image",
                    "name": "image",
                    "widget": "image"
                }
            },
            {
                "label": "Content",
                "name": "body",
                "widget": "markdown"
            }
        ]
    }
];

export default collections;
