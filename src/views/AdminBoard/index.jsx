import { Row, Col, Tooltip, Button, Input, Table, Modal } from "antd"
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUserInterface, setEditModalData } from "../../features/app/appSlice"
import { CloudUploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react"
import { Upload } from 'antd';
import { InboxOutlined, PlusSquareOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from '../../config/axios'
const { TextArea } = Input
const { Dragger } = Upload;

export default () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [isModalProductVisible, setisModalProductVisible] = useState(false)

    const [isModalNewsVisible, setisModalNewsVisible] = useState(false)

    const [image, setimage] = useState(null)

    const [productImage, setproductImage] = useState(null)
    const [NewsImage, setNewsImage] = useState(null)
    const [desriptinon, setdesriptinon] = useState('')
    const [newsdesriptinon, setnewsdesriptinon] = useState('')

    const [posters, setposters] = useState([])

    const [products, setproducts] = useState([])

    const [news, setnews] = useState([])

    useEffect(() => {
        getPosters()
        getProducts()
        getNews()
    }, [])


    const handleEdit = (record, type) => {
        dispatch(setEditModalData({ data: { visible: true, data: record, type: type } }))
    }



    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'name',
            render: (text, record) => {
                return (
                    <>
                        <img style={{ height: '100px', borderRadius: '5px' }} src={record.image} alt="" />
                    </>
                )
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => {
                return (
                    <>
                        <div style={{ dispaly: 'flex', justifyContent: 'space-around', width: '100%' }} >
                            <i onClick={() => handleEdit(record, 'product')} style={{ cursor: 'pointer', color: 'blue', fontSize: '25px' }} class="las la-edit"></i>
                            <i onClick={() => handleDelete(record, 'product')} style={{ cursor: 'pointer', color: 'red', fontSize: '25px' }} class="las la-trash-alt"></i>
                        </div>
                    </>
                )
            }
        },
    ];

    const newscolumns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'name',
            render: (text, record) => {
                return (
                    <>
                        <img style={{ height: '100px', borderRadius: '5px' }} src={record.image} alt="" />
                    </>
                )
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => {
                return (
                    <>
                        <div style={{ dispaly: 'flex', justifyContent: 'space-around', width: '100%' }} >
                            <i onClick={() => handleEdit(record, 'news')} style={{ cursor: 'pointer', color: 'blue', fontSize: '25px' }} class="las la-edit"></i>
                            <i onClick={() => handleDelete(record, 'news')} style={{ cursor: 'pointer', color: 'red', fontSize: '25px' }} class="las la-trash-alt"></i>
                        </div>
                    </>
                )
            }
        },
    ];

    const getPosters = () => {
        axios.get('/posters')
            .then(res => {
                console.log(res);
                setposters(res.data)
            })

    }

    const getProducts = () => {
        axios.get('/products')
            .then(res => {
                console.log(res);
                setproducts(res.data)
            })
    }
    const getNews = () => {
        axios.get('/news')
            .then(res => {
                console.log(res);
                setnews(res.data)
            })
    }

    const showModal = () => {
        setIsModalVisible(true);
    };



    const handleOk = () => {

        let formData = new FormData()

        formData.append('poster', image)

        axios.post('/posters', formData)
            .then(res => {
                console.log(res);
                handleCancel()
                getPosters()
            })
    };
    const handleProductOk = () => {

        let formData = new FormData()

        formData.append('image', productImage)
        formData.append('description', desriptinon)

        axios.post('/products', formData)
            .then(res => {
                console.log(res);

                handleProductCancel()
                getProducts()
                setdesriptinon('')
                setproductImage(null)
            })
    };
    const handleNewsOk = () => {

        let formData = new FormData()

        formData.append('image', NewsImage)
        formData.append('description', newsdesriptinon)

        axios.post('/news', formData)
            .then(res => {
                console.log(res);

                handleNewsCancel()
                getNews()
                setNewsImage(null)
                setnewsdesriptinon('')
            })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleProductCancel = () => {
        setisModalProductVisible(false);
    };
    const handleNewsCancel = () => {
        setisModalNewsVisible(false);
    };

    const dispatch = useDispatch()
    const activeUI = useSelector(state => state.app.adminBoard.activeUI)

    const editData = useSelector(state => state.app.editModal)

    useEffect(() => {
        getProducts()
        getNews()
    }, [editData.visible])


    const handleDelete = (record, type) => {
        if (type === 'product') {
            axios.delete('products/' + record._id)
                .then(res => {
                    getProducts()
                })
        } else {
            axios.delete('news/' + record._id)
                .then(res => {
                    getNews()
                })
        }
    }

    const handleUplaod = (data) => {
        console.log(data);
        setimage(data.file.originFileObj)
    }

    const handleProductUplaod = (data) => {
        console.log(data);
        setproductImage(data.file.originFileObj)
    }
    const handleNewsUplaod = (data) => {
        console.log(data);
        setNewsImage(data.file.originFileObj)
    }


    const deletePoster = id => {
        axios.delete('posters/' + id)
            .then(res => {
                getPosters()
            })
    }

    return (
        <>
            <div className="container admin_board mt-5">
                <Row gutter={[16, 16]} >
                    <Col xs={24} sm={24} md={4}  >
                        <Row gutter={[16, 10]} >
                            <Col sm={8} xs={8} md={24} >
                                <div onClick={() => dispatch(setActiveUserInterface({ ui: "design" }))} className="menu_item">
                                    Design
                                </div>
                            </Col>
                            <Col sm={8} xs={8} md={24} >
                                <div onClick={() => dispatch(setActiveUserInterface({ ui: "products" }))} className="menu_item">
                                    Produits
                                </div>
                            </Col>
                            <Col sm={8} xs={8} md={24} >
                                <div onClick={() => dispatch(setActiveUserInterface({ ui: "news" }))} className="menu_item">
                                    Nouveautés
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={20}  >
                        {
                            activeUI === "design"
                            &&
                            <div className="design">
                                <div>
                                </div>
                                <div className="title_item" >
                                    <h3>Design du page d'acceuil</h3>
                                </div>
                                <div className="title_item" >
                                    <h4>Carousel</h4>
                                </div>

                                <div className="carousel_items">

                                    <Row gutter={[16, 16]} >
                                        {
                                            posters.map(item => {
                                                return (
                                                    <Col xs={24} sm={12} md={6}  >
                                                        <div className="image_item">
                                                            <img src={item.path} alt="" />
                                                            <Button onClick={() => deletePoster(item._id)} style={{ marginTop: "10px", color: 'red', width: '100%' }} icon={<DeleteOutlined style={{ color: 'red' }} />}>Supprimer</Button>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                    <br />
                                    <br />
                                    <br />
                                    <Tooltip style={{ marginTop: "15px" }} title="Upload image">
                                        <Button onClick={() => showModal()} type="primary" shape="circle" icon={<CloudUploadOutlined />} />
                                    </Tooltip>
                                </div>

                            </div>
                        }
                        {
                            activeUI === "products"
                            &&
                            <div className="products">
                                <Button type="primary" onClick={() => setisModalProductVisible(true)} icon={<PlusSquareOutlined />}>Ajouter </Button>
                                <br />
                                <br />
                                <Table dataSource={products} columns={columns} />
                            </div>

                        }
                        {
                            activeUI === "news"
                            &&
                            <div className="news">
                                <Button type="primary" onClick={() => setisModalNewsVisible(true)} icon={<PlusSquareOutlined />}>Ajouter </Button>
                                <br />
                                <br />
                                <Table dataSource={news} columns={newscolumns} />
                            </div>
                        }
                    </Col>
                </Row>
            </div>

            <Modal title="Upload Image" visible={isModalVisible} okText='upload' onOk={handleOk} onCancel={handleCancel}>
                <Dragger

                    itemRender={null}
                    onChange={handleUplaod}
                >

                    {
                        image
                            ?
                            <img style={{ width: "100%", height: "100%" }} src={URL.createObjectURL(image)} alt="" />
                            :
                            <>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag an Image to this area to upload</p>
                            </>
                    }

                </Dragger>
            </Modal>

            <Modal title="Upload Image" visible={isModalProductVisible} okText='ajouter' onOk={handleProductOk} onCancel={handleProductCancel}>
                <Dragger
                    style={{ height: '200px' }}
                    itemRender={null}
                    onChange={handleProductUplaod}
                >

                    {
                        productImage
                            ?
                            <img style={{ width: "100%", height: "100%" }} src={URL.createObjectURL(productImage)} alt="" />
                            :
                            <>
                                <div style={{ height: '200px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click or drag an Image to this area to upload</p>
                                </div>
                            </>
                    }

                </Dragger>
                <TextArea value={desriptinon} onChange={e => setdesriptinon(e.target.value)} style={{ marginTop: '15px' }} placeholder="description du produit" rows={4} />
            </Modal>

            <Modal title="Ajouter nouveauté" visible={isModalNewsVisible} okText='ajouter' onOk={handleNewsOk} onCancel={handleNewsCancel}>
                <Dragger
                    style={{ height: '200px' }}
                    itemRender={null}
                    onChange={handleNewsUplaod}
                >

                    {
                        NewsImage
                            ?
                            <img style={{ width: "100%", height: "100%" }} src={URL.createObjectURL(NewsImage)} alt="" />
                            :
                            <>
                                <div style={{ height: '200px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click or drag an Image to this area to upload</p>
                                </div>
                            </>
                    }

                </Dragger>
                <TextArea value={newsdesriptinon} onChange={e => setnewsdesriptinon(e.target.value)} style={{ marginTop: '15px' }} placeholder="description du produit" rows={4} />
            </Modal>
        </>
    )
}