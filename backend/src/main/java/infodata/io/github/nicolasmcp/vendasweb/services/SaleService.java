package infodata.io.github.nicolasmcp.vendasweb.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import infodata.io.github.nicolasmcp.vendasweb.dto.SaleDTO;
import infodata.io.github.nicolasmcp.vendasweb.dto.SaleSuccessDTO;
import infodata.io.github.nicolasmcp.vendasweb.dto.SaleSumDTO;
import infodata.io.github.nicolasmcp.vendasweb.entities.Sale;
import infodata.io.github.nicolasmcp.vendasweb.repositories.SaleRepository;
import infodata.io.github.nicolasmcp.vendasweb.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;		// Ver Nota
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepository.findAll();					// Ver Nota
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));	
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller() {
		return repository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller() {
		return repository.successGroupedBySeller();
	}
}

// Nota: adequado apenas para um número limitado de vendedores, tipo 10, 20, 50,
//       não é adequado para um número expressivo de vendedores tipo 1000.